import React, { useState } from 'react';
import * as S from './Patients.style';

import SearchView from '../../views/Patients/SearchView/SearchView';
import PatientView from '../../views/Patients/PatientView/PatientView';

import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/Input/Input';

import IconPlus from '../../assets/images/plus-icon.svg';
import { doFetch } from '../../components/utils/common';

function Patients() {
  const [patient, setPatient] = useState({});

  function handleAddFile() {
    console.log('handleAddFile');
  }
  function handleAddPatient() {
    console.log('handleAddFile');
  }

  function handlePatientSearch(event: any) {
    event.preventDefault();
    getPatient();
  }

  function getPatient() {
    // doFetch('');
    setPatient({ id: 89121800310889, firstName: 'Michael', lastName: 'Scott' });
  }

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
