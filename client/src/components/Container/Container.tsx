import React from 'react';
import * as S from './Container.style';

type Props = {
  children: React.ReactNode;
  padding?: string;
  backgroundColor?: string;
};

/**
 * A container that is typically used to separate different
 * parts/sections of a page
 * @param {string} padding Custom padding for the component
 * @example
 * <Container padding="20px" />
 */
function Container({ children, padding, backgroundColor }: Props) {
  return (
    <S.Wrapper padding={padding} backgroundColor={backgroundColor}>
      {children}
    </S.Wrapper>
  );
}

export default Container;
