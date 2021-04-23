import React from 'react';
import * as S from './Section.style';

import Container from '../Container/Container';

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
};

/**
 * A Section that is typically used to separate sections of a page, and
 * will have a content container inside of it
 * @example
 * <Section>Content</Section>
 */
function Section({ children, backgroundColor }: Props) {
  return (
    <S.Wrapper backgroundColor={backgroundColor}>
      <Container>{children}</Container>
    </S.Wrapper>
  );
}

export default Section;
