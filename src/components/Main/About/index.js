import {
  AboutSection,
} from './styles';

import FooterAbout from './FooterAbout';
import AboutMain from './AboutMain';

export default function About() {
  return (
    <AboutSection id="about">
      <AboutMain />
      <FooterAbout />
    </AboutSection>
  );
}
