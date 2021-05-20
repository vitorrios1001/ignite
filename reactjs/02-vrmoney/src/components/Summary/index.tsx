import { CardSummary } from '../CardSummary';

import { Container } from './styles';

const Summary = () => {
  return (
    <Container>
      <CardSummary type="income" value="R$ 10.000,00" />
      <CardSummary type="outcome" value="R$ 10.000,00" />
      <CardSummary
        className="highlight-background"
        type="total"
        value="R$ 10.000,00"
      />
    </Container>
  );
};

export { Summary };
