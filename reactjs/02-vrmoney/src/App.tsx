import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './styles/global';
import { TransactionProvider } from './contexts/TransactionsContext';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'income',
          category: 'Dev',
          amount: 600,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'outcome',
          category: 'Casa',
          amount: 355.22,
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Salário do Mes',
          type: 'income',
          category: 'Dev',
          amount: 5500,
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

function App() {
  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </TransactionProvider>
  );
}

export default App;
