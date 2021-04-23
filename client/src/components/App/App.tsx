import React from 'react';
import * as S from './App.style';

import Header from '../Header/Header';
import Section from '../Section/Section';
import Container from '../Container/Container';

function App() {
  return (
    <S.Wrapper>
      <Header />
      <Section>
        <Container>Container</Container>
      </Section>
    </S.Wrapper>
  );
}

export default App;
