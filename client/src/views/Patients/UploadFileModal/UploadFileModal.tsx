import React, { useEffect, useState } from "react";
import * as S from "./UploadFileModal.style";

import Button from "../../../components/Button/Button";

import CrossIcon from "../../../assets/images/cross-icon.svg";
import { File } from "../../../models";
import { createWorker } from "tesseract.js";
import { fileService } from "../../../services";

type Props = {
  closeModal: any;
  patientId: string;
};

function UploadFileModal({ closeModal, patientId }: Props) {
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    type: string;
    size: number;
    lastModifiedDate: Date;
  }>();
  const [file, setFile] = useState<File>(new File());
  const [isSelected, setIsSelected] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [section, setSection] = useState("demographics");

  useEffect(() => {
    file.patientId = patientId;
    setFile(file);
  }, []);

  const changeHandler = (event: any) => {
    const f = event.target.files[0];
    setSelectedFile(f);

    let reader = new FileReader();
    reader.readAsArrayBuffer(f);
    reader.onload = () => {
      file.fileBlob = reader.result;
    };

    file.fileName = f.name;
    file.fileType = f.type;
    file.fileSize = f.size;
    file.dateCreated = f.lastModifiedDate.toLocaleDateString();
    file.category = section;
    file.tags = section; // TODO: Define tags in future
    setFile(file);

    setIsSelected(true);
  };

  const handleSubmission = async () => {
    setIsLoading(true);

    const worker = createWorker({
      logger: (m: any) => {
        if (m.status === "recognizing text") {
          setOcrProgress(m.progress * 100);
        }
      },
    });

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(selectedFile as any); // TODO: Not sure on type?
    console.log("Recognized text:", text);

    file.extractedText = text;
    setFile(file);
    fileService.addFile(file);

    setIsSelected(false);
    setIsLoading(false);

    await worker.terminate();

    closeModal();
  };

  return (
    <S.Wrapper>
      <S.HeadingContainer>
        <h2>Upload a new file</h2>
        <button onClick={closeModal}>
          <img src={CrossIcon} alt="" />
        </button>
      </S.HeadingContainer>
      <S.Form>
        <S.UploadFileContainer>
          <div>
            {isLoading && <p>{`${ocrProgress.toFixed(2)}%`}</p>}
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected && selectedFile && (
              <div>
                <p>Filename: {selectedFile?.name}</p>
                <p>Filetype: {selectedFile?.type}</p>
                <p>Size in bytes: {selectedFile?.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {selectedFile?.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
          {isSelected && !isLoading && (
            <select
              onChange={(e) => {
                file.category = e.target.value;
                setSection(e.target.value);
                setFile(file);
              }}
              value={section}
            >
              <option value="demographics">Demographics</option>
              <option value="vital-signs">Vital signs</option>
              <option value="doctors-notes">Doctor's Notes</option>
              <option value="nursing-notes">Nursing Notes</option>
              <option value="investigations">Investigations</option>
            </select>
          )}
        </S.UploadFileContainer>
        {isSelected && !isLoading && (
          <Button onClick={handleSubmission} width="142px" type="submit">
            Upload
          </Button>
        )}
      </S.Form>
    </S.Wrapper>
  );
}

export default UploadFileModal;
