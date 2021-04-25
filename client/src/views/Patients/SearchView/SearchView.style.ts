import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 954px;
  margin: 0 auto;
  padding-top: 88px;
  box-sizing: border-box;
`;

export const AddNewPatientContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Form = styled.form`
  color: #fff;
  height: calc(100% - 160px);
  margin-top: 120px;
  max-width: 466px;
  margin: 125px auto 0 auto;
  box-sizing: border-box;
  button {
    margin-top: 20px;
  }
`;
