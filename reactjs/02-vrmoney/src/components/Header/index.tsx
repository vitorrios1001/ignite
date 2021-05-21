import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

import NewTransaction from '../NewTransaction';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="vr money" />
        <NewTransaction />
      </Content>
    </Container>
  );
};

export { Header };
