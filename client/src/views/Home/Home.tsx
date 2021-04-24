import React from 'react';
import * as S from './Home.style';
import Logo from '../../assets/images/logo.png';

import Section from '../../components/Section/Section';

function Home() {
  function handleSubmit(event: any) {
    console.log('Submitting');
    console.log('');
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src={Logo} alt="Digi-Filing" />
        <S.Form>
          <S.Label htmlFor="input-username">Username</S.Label>
          <S.Input type="text" />
          <S.Label htmlFor="input-password">Password</S.Label>
          <S.Input type="password" />
          <S.ForgotPasswordContainer>
            <a href="/">Forgot password?</a>
          </S.ForgotPasswordContainer>
          <S.Button type="submit">Login</S.Button>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;
