import React, { createContext, ReactNode, useContext } from 'react';
import { api } from '../services/api';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'outcome';
  category: string;
  createdAt: string;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

const TransactionProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    api.get<{ transactions: Transaction[] }>('/transactions').then((res) => {
      setTransactions(res.data.transactions);
    });
  }, []);

  const createTransaction = React.useCallback(
    async (transaction: TransactionInput) => {
      const { data } = await api.post<{ transaction: Transaction }>(
        '/transactions',
        transaction,
      );

      setTransactions([...transactions, data.transaction]);
    },
    [setTransactions, transactions],
  );

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => {
  const context = useContext(TransactionContext);

  return context;
};

export { TransactionProvider, useTransaction };
