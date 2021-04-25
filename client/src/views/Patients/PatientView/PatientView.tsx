import React, { useState } from 'react';
import * as S from './PatientView.style';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import UploadFileModal from '../UploadFileModal/UploadFileModal';

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

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '506px',
    boxSizing: 'border-box' as 'border-box',
    border: '0',
  },
  overlay: { zIndex: 999, background: 'rgba(8, 13, 24, 0.7)' },
};

function PatientView({ patient }: Props) {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  /*  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  } */

  function handleRefresh() {
    //
  }

  function handleNewFileUpload() {
    openModal();
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
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <UploadFileModal closeModal={closeModal} />
      </Modal>
    </S.Container>
  );
}

export default PatientView;
