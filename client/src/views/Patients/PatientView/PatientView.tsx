import React, { useState } from 'react';
import * as S from './PatientView.style';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Accordion from '../../../components/Accordion/Accordion';
import PatientSection from '../PatientSection/PatientSection';

import IconPlus from '../../../assets/images/plus-icon.svg';
import IconRefresh from '../../../assets/images/refresh-icon.svg';

import { doFetch } from '../../../components/utils/common';

type Props = {
  patient: any;
};

function PatientView({ patient }: Props) {
  function handleRefresh() {
    //
  }

  function handleNewFileUpload() {
    //
  }

  return (
    <S.Container>
      <S.HeaderInfoContainer>
        Patient ID {patient.id} <span style={{ fontWeight: 500 }}>|</span>{' '}
        <span>
          {patient.firstName} {patient.lastName}
        </span>
      </S.HeaderInfoContainer>
      <S.HeaderControlsContainer>
        <Button
          invert
          onClick={handleRefresh}
          icon={IconRefresh}
          iconPosition="left"
        >
          Refresh
        </Button>
        <Button
          onClick={handleNewFileUpload}
          icon={IconPlus}
          iconPosition="left"
        >
          Upload new file
        </Button>
      </S.HeaderControlsContainer>
      <S.Content>
        <PatientSection title="Demographics">asd</PatientSection>
        <PatientSection title="Vital signs">asd</PatientSection>
        <PatientSection title="Doctor's notes">asd</PatientSection>
        <PatientSection title="Nursing notes">asd</PatientSection>
        <PatientSection title="Investigations">asd</PatientSection>
      </S.Content>
    </S.Container>
  );
}

export default PatientView;
