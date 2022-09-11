import { Container, ImageAndButtonContainer, TextContainer } from './styles';

import Button from '../../../Button';

import imgHomem from '../../../../assets/images/imgh.svg';
import lorem from '../../../../assets/images/img-lorem.svg';

export default function FooterAbout() {
  return (
    <Container>
      <TextContainer>
        <h2>a camada de proteção em lorem ipsum.</h2>
      </TextContainer>

      <img src={imgHomem} alt="homem" />
      <ImageAndButtonContainer>
        <img src={lorem} alt="lorem" />
        <a href="https://www.noot.com.br/" target="_blank" rel="noreferrer">
          <Button type="button">estou sobre lorem ipsum</Button>
        </a>
      </ImageAndButtonContainer>
    </Container>
  );
}
