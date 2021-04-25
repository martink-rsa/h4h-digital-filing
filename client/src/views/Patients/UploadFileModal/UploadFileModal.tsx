import React from 'react';
import * as S from './UploadFileModal.style';

import Button from '../../../components/Button/Button';

import CrossIcon from '../../../assets/images/cross-icon.svg';

type Props = {
  closeModal: any;
};

function UploadFileModal({ closeModal }: Props) {
  function handleFileSelection() {}
  function handleFileUpload() {}

  return (
    <S.Wrapper>
      <S.HeadingContainer>
        <h2>Upload a new file</h2>
        <button onClick={closeModal}>
          <img src={CrossIcon} alt="" />
        </button>
      </S.HeadingContainer>
      <S.Form onSubmit={handleFileUpload}>
        <S.UploadFileContainer>
          <h3>Upload file</h3>
          <Button invert secondary onClick={handleFileSelection}>
            Browse file...
          </Button>
          <select>
            <option value="demographics">Demographics</option>
            <option value="vital-signs">Vital signs</option>
            <option value="doctors-notes">Doctor's Notes</option>
            <option value="nursing-notes">Nursing Notes</option>
            <option value="investigations">Investigations</option>
          </select>
        </S.UploadFileContainer>
        <Button onClick={handleFileUpload} width="142px" type="submit">
          Upload
        </Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default UploadFileModal;
