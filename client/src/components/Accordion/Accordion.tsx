import React, { useState } from 'react';
import * as S from './Accordion.style';
import AnimateHeight from 'react-animate-height';

type Props = {
  children: React.ReactNode;
  title: string;
};

function Accordion({ title, children }: Props) {
  const [height, setHeight] = useState<number | string>(0);

  function toggleHeight() {
    setHeight(height === 0 ? 'auto' : 0);
  }

  return (
    <S.Wrapper onClick={toggleHeight}>
      <S.Heading>{title}</S.Heading>
      <AnimateHeight
        // id="example-panel"
        duration={500}
        height={height} // see props documentation below
      >
        <S.Content>{children}</S.Content>
      </AnimateHeight>
    </S.Wrapper>
  );
}

export default Accordion;
