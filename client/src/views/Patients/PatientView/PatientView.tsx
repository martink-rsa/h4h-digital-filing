import React, { useEffect, useState } from "react";
import * as S from "./PatientView.style";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import UploadFileModal from "../UploadFileModal/UploadFileModal";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Accordion from "../../../components/Accordion/Accordion";
import PatientSection from "../PatientSection/PatientSection";
import Demographics from "./Demographics/Demographics";

import IconPlus from "../../../assets/images/plus-icon.svg";
import IconRefresh from "../../../assets/images/refresh-icon.svg";
import PdfIcon from "../../../assets/images/file-pdf.svg";

import { doFetch } from "../../../components/utils/common";
import { fileService } from "../../../services";
import { File } from "../../../models";

type Props = {
  patient: any;
};

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "506px",
    boxSizing: "border-box" as "border-box",
    border: "0",
  },
  overlay: { zIndex: 999, background: "rgba(8, 13, 24, 0.7)" },
};

function PatientView({ patient }: Props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [files, setFiles] = React.useState<any>([]);

  useEffect(() => {
    fileService.findFiles("", patient._id, "demographics").then((files) => {
      setFiles(files);
    });
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    fileService.findFiles("", patient._id, "demographics").then((files) => {
      setFiles(files);
    });
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
        Patient ID {patient.idNumber} <span style={{ fontWeight: 500 }}>|</span>{" "}
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
        <PatientSection title="Demographics">
          <Demographics
            age={patient.age}
            maritalStatus={patient.maritalStatus}
            occupation={patient.occupation}
            nationality={patient.nationality}
            idNumber={patient.idNumber}
            ethnicity={patient.ethnicity}
            gender={patient.gender}
            email={patient.email}
            phoneNumber={patient.phoneNumber}
            address={patient.address}
          />

          {files.map((file: File) => (
            <div>
              <img src={PdfIcon} alt="" /> {file.fileName}{" "}
              <Button onClick={() => alert(file.extractedText)}>
                View Text Version
              </Button>
            </div>
          ))}
        </PatientSection>
        {/* <PatientSection title="Vital signs">asd</PatientSection>
        <PatientSection title="Contact Details">
          Phone Number: {patient.phoneNumber} <br />
          Email: {patient.email} <br />
          Address: {patient.address}
        </PatientSection>
        <PatientSection title="Demographics">
          Gender: {patient.gender}<br />
          Ethnicity: {patient.ethnicity} <br />
          Martial Status: {patient.maritalStatus}
        </PatientSection>
        <PatientSection title="Vital Signs">
          Weight: 30kg<br />
          Height: 1.22m
        </PatientSection> */}
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
        <UploadFileModal patientId={patient._id} closeModal={closeModal} />
      </Modal>
    </S.Container>
  );
}

export default PatientView;
