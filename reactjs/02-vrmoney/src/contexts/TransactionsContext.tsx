import React, { createContext, ReactNode } from 'react';
import { api } from '../services/api';

type TransactionType = {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'outcome';
  category: string;
  createdAt: string;
};

const TransactionContext = createContext<TransactionType[]>([]);

const TransactionProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [transactions, setTransactions] = React.useState<TransactionType[]>([]);

  React.useEffect(() => {
    api
      .get<{ transactions: TransactionType[] }>('/transactions')
      .then((res) => {
        setTransactions(res.data.transactions);
      });
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, TransactionContext };
