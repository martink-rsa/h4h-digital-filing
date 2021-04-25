import React, { useState } from "react";
import * as S from "./SearchView.style";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

import IconPlus from "../../../assets/images/plus-icon.svg";

type Props = {
  handleSubmit: (searchTerm: string) => void;
  handleAddPatient: () => void;
};

function SearchView({ handleSubmit, handleAddPatient }: Props) {
  const [searchId, setSearchId] = useState("");

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const { value } = event.currentTarget;
    setSearchId(value);
  }

  return (
    <S.Container>
      <S.AddNewPatientContainer>
        <Button onClick={handleAddPatient} icon={IconPlus}>
          Add new patient
        </Button>
      </S.AddNewPatientContainer>
      <S.Form>
        <Input
          id="input-patient-id"
          name="input-patient-id"
          label="Patient ID"
          labelPadding="0 0 10px 0"
          inputSize="m"
          onChange={handleChange}
          value={searchId}
          pattern="[0-9]{1,10}"
        />
        <Button onClick={() => handleSubmit(searchId)} width="170px">
          Search
        </Button>
      </S.Form>
    </S.Container>
  );
}

export default SearchView;
