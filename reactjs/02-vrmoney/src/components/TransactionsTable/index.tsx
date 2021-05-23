import { Container } from './styles';

import { useTransaction } from '../../hooks/useTransaction';

import { formatDateBR } from '../../utils/dateFormat';
import { formatCurrency } from '../../utils/numberFormat';

const TransactionsTable = () => {
  const { transactions } = useTransaction();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={`${transaction.id}-${transaction.title}`}>
              <td>{transaction.title}</td>
              <td className={`--${transaction.type}`}>
                {formatCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDateBR(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export { TransactionsTable };
