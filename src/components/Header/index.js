import Button from '../Button';
import { Container, Navigation } from './styles';

import noot from '../../assets/images/logo/noot.svg';

export default function Header() {
  return (
    <Container>
      <img src={noot} alt="noot" />
      <Navigation>
        <a href="#home" className="page-links">home</a>
        <a href="#about" className="page-links">sobre</a>
        <a href="#funcionalities" className="page-links">funcionalidades</a>
        <a href="#clients" className="page-links">clientes</a>
      </Navigation>
      <a className="button" href="https://www.noot.com.br/" target="_blank" rel="noreferrer">
        <Button type="button">estou sobre lorem ipsum</Button>
      </a>
    </Container>
  );
}
