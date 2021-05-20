import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="vr money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
};

export { Header };
