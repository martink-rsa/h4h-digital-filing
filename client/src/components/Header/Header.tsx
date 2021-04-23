import React from 'react';
import * as S from './Header.style';

type Props = {
  logo: string;
};

/**
 * The main header for the site
 */
function Header({ logo }: Props) {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <S.Logo src={logo} alt="" />
        Digital Filing
      </S.LogoContainer>
      <S.NavMenu />
    </S.Wrapper>
  );
}

export default Header;
