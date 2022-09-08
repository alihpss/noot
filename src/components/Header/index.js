import Button from '../Button';
import { Container } from './styles';

import noot from '../../assets/images/logo/noot.svg';

export default function Header() {
  return (
    <Container>
      <img src={noot} alt="noot" />
      <nav>
        <a href="/">home</a>
        <a href="/">sobre</a>
        <a href="/">funcionalidades</a>
        <a href="/">clientes</a>
      </nav>
      <Button type="Button">estou sobre lorem ipsum</Button>
    </Container>
  );
}
