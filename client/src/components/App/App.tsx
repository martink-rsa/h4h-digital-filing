import React, { useEffect, useState } from "react";
import * as S from "./App.style";

import Section from "../Section/Section";
import PatientDisplayTable from "../PatientDisplayTable/PatientDisplayTable";
import Layout from "../Layout/Layout";
import FileUpload from "../FileUpload";

import { doFetch } from "../utils/common";

import { fileDisplayTableData } from "../../data/dummyData";
import { fileService } from "../../services";
import { File } from "../../models";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab";

function App() {
  const [files, setFiles] = useState([] as Array<File>);

  useEffect(() => {
    async function getData(url: string) {
      try {
        const result = await doFetch(url);
        console.log(result);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getData(url);

    fileService.findFiles().then((files) => {
      setFiles(files);
    });
  }, []);

  return (
    <S.Wrapper>
      <Layout>
        <Section>
          <PatientDisplayTable data={files} />
        </Section>

        {/* TODO: CALLBACK AFTER UPLOAD TO REFETCH FILES */}
        <FileUpload></FileUpload>
      </Layout>
    </S.Wrapper>
  );
}

export default App;
