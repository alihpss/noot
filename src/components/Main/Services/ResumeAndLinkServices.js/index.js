import {
  Container, ContentContainer, ImageContainer, InfoContainer, TextContainer,
} from './styles';

import Button from '../../../Button';
import ContainerImages from '../../../ContainerImages';

import greenDiv from '../../../../assets/images/green-div.svg';
import lol from '../../../../assets/images/lol.svg';
import mascaraGta from '../../../../assets/images/boneco-mascara.svg';

export default function ResumeAndLinkServices() {
  return (
    <Container>
      <img src={greenDiv} alt="div breaker" />

      <ContentContainer>

        <ImageContainer
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <img src={lol} alt="game figure" />
        </ImageContainer>

        <InfoContainer>
          <TextContainer>
            <h2>
              tudo é feito
              {' '}
              <br />
              {' '}
              em lorem ipsum
              <br />
              {' '}
              sem problema algum.
            </h2>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
            </p>
            <a href="https://www.noot.com.br/" target="_blank" rel="noreferrer">
              <Button type="button">cadastrar-se</Button>
            </a>
          </TextContainer>
          <ContainerImages>
            <img src={mascaraGta} alt="gta toy" />
          </ContainerImages>
        </InfoContainer>

      </ContentContainer>

      <img src={greenDiv} alt="div breaker" />
    </Container>
  );
}
