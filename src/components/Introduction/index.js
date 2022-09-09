import { ApresentationContainer, Container, Content } from './styles';

import gta from '../../assets/images/gta.svg';
import backGroundMinecraft2 from '../../assets/images/backGroundMinecraft2.svg';
import bonecoMinecraft from '../../assets/images/bonecoMinecraft.svg';
import mascaraGta from '../../assets/images/mascara-gta.svg';

import Button from '../Button';
import ContainerImages from '../ContainerImages';

export default function Introduction() {
  return (
    <Container>

      <Content>
        <div id="img-gta" data-aos="fade-up" data-aos-duration="1000">
          <img src={gta} alt="alt" />
        </div>

        <ContainerImages className="gta" data-aos="fade-down" data-aos-duration="1000">
          <img src={mascaraGta} alt="boneco" />
        </ContainerImages>
      </Content>

      <ApresentationContainer>
        <h1>lorem ipsum e mais que um texto salva vidas.</h1>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Cadastrar-se</Button>
      </ApresentationContainer>

      <Content>
        <ContainerImages className="minecraft" data-aos="fade-up" data-aos-duration="1000">
          <img src={bonecoMinecraft} alt="boneco" />
        </ContainerImages>

        <div className="backGround-minecraft">
          <img src={backGroundMinecraft2} alt="minecraft" data-aos="fade-down" data-aos-duration="1000" />
        </div>
      </Content>

    </Container>
  );
}
