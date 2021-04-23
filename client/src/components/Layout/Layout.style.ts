import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.padding.page + 'px'};
`;
