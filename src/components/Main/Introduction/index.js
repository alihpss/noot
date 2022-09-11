import { ApresentationContainer, Container, Content } from './styles';

import gta from '../../../assets/images/gta.svg';
import backGroundMinecraft2 from '../../../assets/images/backGroundMinecraft2.svg';
import bonecoMinecraft from '../../../assets/images/bonecoMinecraft.svg';
import linha from '../../../assets/images/linha-container.svg';
import mascaraGta from '../../../assets/images/mascara-gta.svg';

import Button from '../../Button';
import ContainerImages from '../../ContainerImages';

export default function Introduction() {
  return (
    <Container id="home">

      <Content>
        <div id="img-gta" data-aos="fade-up" data-aos-duration="1000">
          <img src={gta} alt="gta" />
        </div>

        <ContainerImages className="gta" data-aos="fade-down" data-aos-duration="1000">
          <img src={mascaraGta} alt="boneco" className="boneco-gta" />
          <img src={linha} alt="linha" className="linha" />
        </ContainerImages>
      </Content>

      <ApresentationContainer>
        <h1>lorem ipsum e mais que um texto salva vidas.</h1>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="https://www.noot.com.br/" target="_blank" rel="noreferrer">
          <Button type="button">Cadastrar-se</Button>
        </a>
      </ApresentationContainer>

      <Content>
        <ContainerImages className="minecraft" data-aos="fade-up" data-aos-duration="1000">
          <img src={linha} alt="linha" className="linha" />
          <img src={bonecoMinecraft} alt="boneco" className="boneco-minecraft" />
        </ContainerImages>

        <div className="backGround-minecraft">
          <img src={backGroundMinecraft2} alt="minecraft" data-aos="fade-down" data-aos-duration="1000" />
        </div>
      </Content>

    </Container>
  );
}
