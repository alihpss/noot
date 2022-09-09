import Button from '../Button';
import { Container, Navigation } from './styles';

import noot from '../../assets/images/logo/noot.svg';

export default function Header() {
  return (
    <Container>
      <img src={noot} alt="noot" />
      <Navigation>
        <a href="/">home</a>
        <a href="/">sobre</a>
        <a href="/">funcionalidades</a>
        <a href="/">clientes</a>
      </Navigation>
      <Button type="Button">estou sobre lorem ipsum</Button>
    </Container>
  );
}
