import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
