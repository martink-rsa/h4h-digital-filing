import React, { useEffect, useState } from 'react';
import * as S from './App.style';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Section from '../Section/Section';
import PatientDisplayTable from '../PatientDisplayTable/PatientDisplayTable';
import Layout from '../Layout/Layout';

import Home from '../../views/Home/Home';

// import FileUpload from '../FileUpload';

import { doFetch } from '../utils/common';

// import { fileDisplayTableData } from '../../data/dummyData';
// import { fileService } from '../../services';
import { File } from '../../models';

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab';

function App() {
  const [files, setFiles] = useState([] as Array<File>);

  useEffect(() => {
    async function getData(url: string) {
      try {
        const result = await doFetch(url);
        console.log(result);
      } catch (error) {
        console.log('Error', error);
      }
    }
    getData(url);
  }, []);

  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
