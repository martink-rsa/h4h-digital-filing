import React from 'react';
import * as S from './Layout.style';

import Header from '../Header/Header';

type Props = {
  handleAddFile: () => void;
  children: React.ReactNode;
};

/**
 * A base layout for the site that contains a header and a footer
 * and a main container for inserting the children
 */
function Layout({ handleAddFile, children }: Props) {
  return (
    <S.Wrapper>
      <Header handleAddFile={handleAddFile} />
      <S.Main>{children}</S.Main>
      <S.PulseLineDecalContainer />
    </S.Wrapper>
  );
}

export default Layout;
