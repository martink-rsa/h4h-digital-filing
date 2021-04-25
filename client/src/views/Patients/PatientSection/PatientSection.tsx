import React, { useState } from 'react';
import * as S from './PatientSection.style';
import AnimateHeight from 'react-animate-height';

import Button from '../../../components/Button/Button';

import ArrowIcon from '../../../assets/images/chevron-up.svg';
import PencilIcon from '../../../assets/images/pencil-icon.svg';

type Props = {
  children: React.ReactNode;
  title: string;
};

function PatientSection({ title, children }: Props) {
  const [isActive, setActive] = useState(false);

  function toggleHeight() {
    setActive(!isActive);
  }

  function handleSectionEdit() {
    console.log('Edit section');
  }

  return (
    <S.Wrapper onClick={toggleHeight}>
      <S.HeadingContainer>
        <S.Heading>{title}</S.Heading>
        <S.ControlsContainer>
          {isActive && (
            <Button
              icon={PencilIcon}
              iconPosition="left"
              onClick={handleSectionEdit}
              invert
              secondary
            >
              Edit
            </Button>
          )}
          <S.ArrowIcon src={ArrowIcon} alt="" isActive={isActive} />
        </S.ControlsContainer>
      </S.HeadingContainer>
      <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
        <S.Content>{children}</S.Content>
      </AnimateHeight>
    </S.Wrapper>
  );
}

export default PatientSection;
