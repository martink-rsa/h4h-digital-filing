import React from "react";
import * as S from "./App.style";

import Layout from "../Layout/Layout";
import FileUpload from "../FileUpload";

function App() {
  // TODO: Example to fuzzy search documents locally
  // const [documents, setDocuments] = useState([]);
  // useEffect(() => {
  //   documentService.findDocuments().then((docs) => {
  //     console.log("1", docs);
  //   });
  // }, []);

  return (
    <S.Wrapper>
      <Layout>
        <FileUpload></FileUpload>
      </Layout>
    </S.Wrapper>
  );
}

export default App;
