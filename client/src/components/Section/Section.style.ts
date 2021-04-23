import styled from 'styled-components';

type WrapperProps = {
  backgroundColor?: string;
};

export const Wrapper = styled.section<WrapperProps>`
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'none'};

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
