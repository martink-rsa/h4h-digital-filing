import React, { useState } from "react";
import { createWorker, ImageLike } from "tesseract.js";
import { File } from "../../models";
import { fileService } from "../../services";
import Button from "../Button/Button";
import * as S from "./FileUpload.style";

function FileUpload() {
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
    file.category = "test-category";
    file.tags = "test-tags";
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
