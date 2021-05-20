import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { IndexPage } from './pages';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
