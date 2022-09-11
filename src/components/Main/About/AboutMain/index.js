import {
  Container, ContainerDivWithoutBackground, ImageContainer, TextContainer,
} from './styles';

import backgroundGta from '../../../../assets/images/backGroundGta2.svg';
import backgroundMinecraft from '../../../../assets/images/backGroundMinecraft.svg';

import Button from '../../../Button';
import ContainerImages from '../../../ContainerImages';

export default function AbouMain() {
  return (
    <>
      <Container>
        <TextContainer>
          <h2>somos uma extensão em lorem ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequa.
          </p>
        </TextContainer>
        <ImageContainer>
          <img src={backgroundMinecraft} alt="minecraft" />
        </ImageContainer>
      </Container>

      <Container>
        <ImageContainer>
          <img src={backgroundGta} alt="gta" />
        </ImageContainer>

        <TextContainer>
          <h2>precisa de um lorem ipsum?</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <a href="https://www.noot.com.br/" target="_blank" rel="noreferrer">
            <Button type="button">entrar em contato</Button>
          </a>
        </TextContainer>
      </Container>
      <ContainerDivWithoutBackground>

        <ContainerImages />
      </ContainerDivWithoutBackground>
    </>
  );
}
