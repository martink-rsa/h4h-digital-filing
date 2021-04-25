import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 954px;
  margin: 0 auto;
  padding-top: 113px;
  color: #fff;
`;

export const HeaderInfoContainer = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary};

  span {
    font-weight: 300;
    font-size: 30px;
    color: #fff;
  }
`;

export const HeaderControlsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  button:last-of-type {
    margin-left: 20px;
  }
`;

export const Content = styled.div`
  margin-top: 27px;
`;

export const Form = styled.form`
  color: #fff;
  height: 100%;
  margin-top: 120px;
  max-width: 466px;
  margin: 125px auto 0 auto;
  background: red;

  button {
    margin-top: 20px;
  }
`;
