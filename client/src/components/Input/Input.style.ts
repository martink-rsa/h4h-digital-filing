import styled from 'styled-components';

type LabelProps = {
  labelPadding?: string;
};

// padding-left: 0.313rem;

export const Label = styled.label<LabelProps>`
  display: block;
  padding: ${(props) => props.labelPadding};
`;

type InputProps = {
  inputSize: string;
};

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  height: ${({ inputSize }) => {
    if (inputSize === 's') {
      return '1rem';
    }
    if (inputSize === 'l') {
      return '3.75rem';
    }
    return '2.5rem';
  }};
  width: 100%;
  border: 0;
  border-radius: 10px;
  font-size: ${({ inputSize }) => {
    if (inputSize === 's') {
      return '1rem';
    }
    if (inputSize === 'l') {
      return '1.25rem;';
    }
    return '1rem';
  }};
  padding-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.s + 'px'}) {
    height: 50px;
    font-size: 1rem;
  }
`;
