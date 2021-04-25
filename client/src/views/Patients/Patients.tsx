import React, { useState } from "react";
import * as S from "./Patients.style";

import SearchView from "../../views/Patients/SearchView/SearchView";
import PatientView from "../../views/Patients/PatientView/PatientView";

import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";

import IconPlus from "../../assets/images/plus-icon.svg";
import { doFetch } from "../../components/utils/common";

function Patients() {
  const [patient, setPatient] = useState({});

  function handleAddFile() {
    console.log("handleAddFile");
  }
  function handleAddPatient() {
    console.log("handleAddFile");
  }

  async function handlePatientSearch(searchTerm: string) {
    try {
      const response = await doFetch(
        `http://localhost:3003/patients?search=${searchTerm}`
      );
      if (!response.data.success) {
        return alert("Failed to find patient");
      }
      const patients = response.data.data;
      console.log(patients);
      
      if (patients.length > 1) {
        return alert("Found more than 1 patient");
      }

      setPatient(patients[0]);
    } catch (err) {
      alert("Failed to find patient");
    }
  }

  // function getPatient() {
  //   // doFetch('');
  //   setPatient({ id: 89121800310889, firstName: "Michael", lastName: "Scott" });
  // }

  return (
    <Layout handleAddFile={handleAddFile}>
      {Object.keys(patient).length > 0 ? (
        <PatientView />
      ) : (
        <SearchView
          handleSubmit={handlePatientSearch}
          handleAddPatient={handleAddPatient}
        />
      )}
    </Layout>
  );
}

export default Patients;
