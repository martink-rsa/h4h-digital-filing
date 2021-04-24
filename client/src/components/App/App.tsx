import React, { useEffect } from 'react';
import * as S from './App.style';

import Layout from '../Layout/Layout';

import { doFetch } from '../utils/common';

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab';

function App() {
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
    <S.Wrapper>
      <Layout>App page</Layout>
    </S.Wrapper>
  );
}

export default App;
