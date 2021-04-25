import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;
`;

// body 6D6D6D

export const Section = styled.div`
  margin-bottom: 40px;
  h2 {
    font-size: 20px;
    color: #000;
    text-align: left;
    margin-top: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 16px;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`;

export const Body = styled.p`
  color: #6d6d6d;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;
