import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  color: #fff;
  padding: 0 20px;
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 422px;
  width: 100%;
  margin: 0 auto;
  margin-top: 160px;
  font-size: 16px;
`;

export const Logo = styled.img`
  width: 300px;
  height: 275px;
  margin-bottom: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs + 'px'}) {
    width: 100%;
    height: auto;
  }
`;

export const Label = styled.label`
  padding-left: 0.313rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 60px;
  width: 100%;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 16px;
`;

export const Form = styled.form`
  width: 100%;
  input {
    margin-top: 10px;
    margin-bottom: 26px;
  }
  input:last-of-type {
    margin-bottom: 10px;
  }
`;

export const ForgotPasswordContainer = styled.div`
  text-align: right;
  width: 100%;
  a {
    color: #fff;
    margin-right: 34px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs + 'px'}) {
    a {
      margin-right: 17px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: 10px;
  margin-top: 46px;
  padding: 26px 0 26px 0;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  background: ${(props) => props.theme.color.primary};
`;
