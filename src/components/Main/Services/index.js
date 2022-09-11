import {
  ServicesContainer, Section, TextContainer, Container,
} from './styles';

import ContainerImages from '../../ContainerImages';

import shield from '../../../assets/images/logo/shield.svg';
import rocket from '../../../assets/images/logo/rocket.svg';
import close from '../../../assets/images/logo/close.svg';
import graphic from '../../../assets/images/logo/graphic.svg';
import meteor from '../../../assets/images/logo/meteor.svg';
import astronaut from '../../../assets/images/logo/astronaut.svg';
import bonecoGta from '../../../assets/images/boneco-gta.svg';
import bonecoMinecraft from '../../../assets/images/bonecoMinecraft2.svg';

import ResumeAndLinkServices from './ResumeAndLinkServices.js';

export default function Services() {
  return (
    <Section id="funcionalities">
      <TextContainer>
        <h2>proteção para ataques de lorem ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </TextContainer>
      <ServicesContainer>

        <ContainerImages
          style={{ borderTopLeftRadius: 0 }}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
        >
          <img src={shield} alt="shield" />
          <p>
            Controle tudo pelo nosso
            {' '}
            <br />
            {' '}
            lorem
            {' '}
            <br />
            {' '}
            ipsum.
          </p>

        </ContainerImages>

        <ContainerImages
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          style={{ borderTopRightRadius: 0 }}
        >
          <img src={rocket} alt="rocket" />
          <p>
            Configure regras
            {' '}
            <br />
            {' '}
            Lorem
            {' '}
            <br />
            ipsum.
          </p>

        </ContainerImages>

        <ContainerImages
          style={{ borderBottomLeftRadius: 0 }}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="600"
        >
          <img src={close} alt="close" />
          <p>Bloqueie portas não utilizadas em lorem ipsum.</p>

        </ContainerImages>

        <ContainerImages
          style={{ borderBottomRightRadius: 0 }}
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="600"
        >
          <img src={graphic} alt="graphic" />
          <p>Aplique loremi psum e muito mais.</p>

        </ContainerImages>

        <ContainerImages
          style={{ borderTopLeftRadius: 0 }}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="700"
        >
          <img src={meteor} alt="meteor" />
          <p>Capacidade alta em lorem ipsum.</p>

        </ContainerImages>

        <ContainerImages
          style={{ borderTopRightRadius: 0 }}
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="700"
        >
          <img src={astronaut} alt="astronaut" />
          <p>Interconexões comlorem ipsum.</p>

        </ContainerImages>

      </ServicesContainer>
      <Container>
        <ContainerImages>
          <img src={bonecoGta} alt="GTA toy" />
        </ContainerImages>
      </Container>

      <ResumeAndLinkServices />

      <Container>
        <ContainerImages>
          <img src={bonecoMinecraft} alt="minecraft toy" />
        </ContainerImages>
      </Container>
    </Section>
  );
}
