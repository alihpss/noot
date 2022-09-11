import { FooterContainer, FooterInformation } from './styles';

import noot from '../../assets/images/logo/noot-footer.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInformation>
        <div>
          <p>&copy; Noot Games.</p>
          <span> Todos os direitos reservados</span>
        </div>
        <img src={noot} alt="noot logo" />
      </FooterInformation>
    </FooterContainer>
  );
}
