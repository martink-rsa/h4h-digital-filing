import React from 'react';
import * as S from './App.style';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import Container from '../Container/Container';

function App() {
  return (
    <S.Wrapper>
      <Header />
      <Section>
        <Container>Container</Container>
      </Section>
      <Footer />
    </S.Wrapper>
  );
}

export default App;
