import Partners from './Partners';
import Services from './Services';
import Introduction from './Introduction';
import { Container } from './styles';
import About from './About';

export default function Main() {
  return (
    <Container>
      <Introduction />
      <Partners />
      <Services />
      <About />
    </Container>
  );
}
