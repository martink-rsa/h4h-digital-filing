import React, { useState } from "react";
import * as S from "./App.style";

import Layout from "../Layout/Layout";
import Button from "../Button/Button";

const { createWorker } = require("tesseract.js");

function App() {
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    type: string;
    size: number;
    lastModifiedDate: Date;
  }>();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = async () => {
    console.log(selectedFile);

    const worker = createWorker({
      logger: (m: any) => console.log(m),
    });

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    console.log("Recognizing...");
    const {
      data: { text },
    } = await worker.recognize(selectedFile);
    console.log("Recognized text:", text);
    await worker.terminate();
  };

  return (
    <S.Wrapper>
      <Layout>
        <div>
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
              <Button onClick={handleSubmission}>Submit</Button>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
        </div>
      </Layout>
    </S.Wrapper>
  );
}

export default App;
