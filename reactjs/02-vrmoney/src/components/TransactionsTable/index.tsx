import { Container } from './styles';

const TransactionsTable = () => {
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
          <tr>
            <td>Desenvolvimento de Sistema</td>
            <td className="--income">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Sistema</td>
            <td className="--outcome">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Sistema</td>
            <td className="--income">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Sistema</td>
            <td className="--outcome">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export { TransactionsTable };
