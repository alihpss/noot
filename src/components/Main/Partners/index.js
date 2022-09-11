import {
  ClientsLogoContainer, Container, TextContainer, Partner,
} from './styles';

import alta from '../../../assets/images/logo/alta.svg';
import enxadahost from '../../../assets/images/logo/enxadahost.svg';
import fx from '../../../assets/images/logo/fx.svg';
import gamersclub from '../../../assets/images/logo/gamersclub.svg';
import neepHost from '../../../assets/images/logo/neep-host.svg';
import outplay from '../../../assets/images/logo/outplay.svg';

export default function Partners() {
  return (
    <Container id="clients">
      <TextContainer>
        <h2>até lorem ipsum, confia.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al
          iqua. Ut enim ad minim veniam, quis nostrud.
        </p>
      </TextContainer>

      <ClientsLogoContainer>

        <Partner>
          <img src={outplay} alt="empresa" />
        </Partner>

        <Partner>
          <img src={enxadahost} alt="empresa" />
        </Partner>

        <Partner>
          <img src={alta} alt="empresa" />
        </Partner>

        <Partner>
          <img src={neepHost} alt="empresa" />
        </Partner>

        <Partner>
          <img src={gamersclub} alt="empresa" />
        </Partner>

        <Partner>
          <img src={fx} alt="empresa" />
        </Partner>

      </ClientsLogoContainer>
    </Container>
  );
}
