import { Container } from './styles';

import alta from '../../assets/images/logo/alta.svg';
import enxadahost from '../../assets/images/logo/enxadahost.svg';
import fx from '../../assets/images/logo/fx.svg';
import gamersclub from '../../assets/images/logo/gamersclub.svg';
import neepHost from '../../assets/images/logo/neep-host.svg';
import outplay from '../../assets/images/logo/outplay.svg';

export default function Empresas() {
  return (
    <Container>
      <div id="texto-clientes">
        <h2>até lorem ipsum, confia.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al
          iqua. Ut enim ad minim veniam, quis nostrud.
        </p>
      </div>

      <div id="logo-clientes">

        <div className="empresas">
          <img src={alta} alt="empresa" />
        </div>

        <div className="empresas">
          <img src={fx} alt="empresa" />
        </div>

        <div className="empresas">
          <img src={gamersclub} alt="empresa" />
        </div>

        <div className="empresas">
          <img src={neepHost} alt="empresa" />
        </div>

        <div className="empresas">
          <img src={outplay} alt="empresa" />
        </div>

        <div className="empresas">
          <img src={enxadahost} alt="empresa" />
        </div>

      </div>
    </Container>
  );
}
