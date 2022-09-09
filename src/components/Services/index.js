import { ServicesContainer, Section, TextContainer } from './styles';

import ContainerImages from '../ContainerImages';

export default function Services() {
  return (
    <Section>
      <TextContainer>
        <h2>proteção para ataques de lorem ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </TextContainer>
      <ServicesContainer>
        <ContainerImages>aaa</ContainerImages>
        <ContainerImages>aaa</ContainerImages>
        <ContainerImages>aaa</ContainerImages>
        <ContainerImages>aaa</ContainerImages>
        <ContainerImages>aaa</ContainerImages>
        <ContainerImages>aaa</ContainerImages>
      </ServicesContainer>
    </Section>
  );
}
