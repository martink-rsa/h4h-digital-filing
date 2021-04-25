import React from 'react';
import * as S from './Home.style';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import Input from '../../components/Input/Input';

/**
 * The landing page for the app
 */
function Home() {
  const history = useHistory();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    history.push('./patients');
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src={Logo} alt="Digi-Filing" />
        <S.Form onSubmit={handleSubmit}>
          <Input
            label="Username"
            id="input-username"
            name="input-username"
            type="text"
          />
          <Input
            label="Password"
            id="input-password"
            name="input-password"
            type="password"
          />
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
