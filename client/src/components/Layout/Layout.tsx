import React from 'react';
import * as S from './Layout.style';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Logo from '../../assets/images/logo.png';

type Props = {
  children: React.ReactNode;
};

/**
 * A base layout for the site that contains a header and a footer
 * and a main container for inserting the children
 */
function Layout({ children }: Props) {
  return (
    <S.Wrapper>
      <Header logo={Logo} />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  );
}

export default Layout;
