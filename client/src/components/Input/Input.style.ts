import styled from 'styled-components';

export const Label = styled.label`
  padding-left: 0.313rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 3.75rem;
  width: 100%;
  border: 0;
  border-radius: 10px;
  font-size: 1.25rem;
  padding-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.s + 'px'}) {
    height: 50px;
    font-size: 1rem;
  }
`;
