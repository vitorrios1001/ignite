import { useTransaction } from '../../hooks/useTransaction';
import { CardSummary } from '../CardSummary';

import { Container } from './styles';

const Summary = () => {
  const { transactions } = useTransaction();

  const totals = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );

  console.log('transactions::', transactions);

  return (
    <Container>
      <CardSummary type="income" value={totals.income} />
      <CardSummary type="outcome" value={-totals.outcome} />
      <CardSummary
        className="highlight-background"
        type="total"
        value={totals.total}
      />
    </Container>
  );
};

export { Summary };
