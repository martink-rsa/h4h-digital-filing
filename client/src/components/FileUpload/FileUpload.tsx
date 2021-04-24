import React, { useState } from "react";
import { createWorker, ImageLike } from "tesseract.js";
import { Document } from "../../models";
import { documentService } from "../../services";
import Button from "../Button/Button";
import * as S from "./FileUpload.style";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    type: string;
    size: number;
    lastModifiedDate: Date;
  }>();
  const [document, setDocument] = useState<Document>(new Document());
  const [isSelected, setIsSelected] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      document.fileBlob = reader.result;
    };

    document.name = file.name;
    document.fileType = file.type;
    document.size = file.size;
    setDocument(document);

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

    document.extractedText = text;
    setDocument(document);
    documentService.addDocument(document);

    setIsSelected(false);
    setIsLoading(false);

    await worker.terminate();
  };

  return (
    <div>
      {isLoading && <p>{`${ocrProgress.toFixed(2)}%`}</p>}
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected && selectedFile ? (
        <div>
          <p>Filename: {selectedFile?.name}</p>
          <p>Filetype: {selectedFile?.type}</p>
          <p>Size in bytes: {selectedFile?.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile?.lastModifiedDate.toLocaleDateString()}
          </p>
          {!isLoading && <Button onClick={handleSubmission}>Submit</Button>}
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
    </div>
  );
}

export default FileUpload;
