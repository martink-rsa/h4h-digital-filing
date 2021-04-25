// import React, { useEffect, useState } from 'react';
// import * as S from './App.style';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../../views/Home/Home';
import PatientsPage from '../../views/Patients/Patients';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/patients">
          <PatientsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
