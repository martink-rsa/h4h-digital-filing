import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  background: #fff;
  height: 90px;
  @media (max-width: ${(props) => props.theme.breakpoints.s + 'px'}) {
    padding: 0 10px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  img {
    padding-right: 18px;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: 0;
`;
