import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

export function Header () {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="Money Control"/>
        <button type="button">
          New transaction
        </button>
      </Content>
    </Container>
  )
}