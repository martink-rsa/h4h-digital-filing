import styled from 'styled-components';

type WrapperProps = {
  padding?: string;
  backgroundColor?: string;
  column?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'none'};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.xl + 'px'}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l + 'px'}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m + 'px'}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s + 'px'}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs + 'px'}) {
  }
`;
