import React, { useState } from 'react';
import * as S from './PatientView.style';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import IconPlus from '../../../assets/images/plus-icon.svg';
import { doFetch } from '../../../components/utils/common';

type Props = {};

function PatientView({}: Props) {
  return <S.Container>Patient</S.Container>;
}

export default PatientView;
