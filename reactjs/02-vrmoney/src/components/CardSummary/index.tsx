import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { formatCurrency } from '../../utils/numberFormat';
import { Container } from './styles';

type CardSummaryProps = {
  type: 'income' | 'outcome' | 'total';
  value: number;
  className?: string;
};

const CONTENT = {
  income: {
    icon: incomeImg,
    title: 'Entradas',
  },
  outcome: {
    icon: outcomeImg,
    title: 'Saídas',
  },
  total: {
    icon: totalImg,
    title: 'Total',
  },
};

const CardSummary = ({ type, value, className }: CardSummaryProps) => {
  const content = CONTENT[type];

  return (
    <Container className={className}>
      <header>
        <p>{content.title}</p>
        <img src={content.icon} alt={content.title} />
      </header>

      <strong>{formatCurrency(value)}</strong>
    </Container>
  );
};

export { CardSummary };
