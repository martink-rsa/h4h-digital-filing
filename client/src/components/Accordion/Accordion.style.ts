import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: 0;

  text-align: left;

  padding: 15px 20px;
  color: ${(props) => props.theme.color.primary};
  font-size: 25px;
  background: #fff;
  width: 100%;

  margin-bottom: 7px;
`;

export const Heading = styled.h3`
  margin: 0;
  text-align: left;
  font-weight: 500 !important;
  font-size: 25px;
  img {
    height: 14px;
    width: 21px;
  }
`;

export const Content = styled.div`
  border-top: 1px solid rgba(8, 13, 24, 0.1);
  margin-top: 10px;
  padding-top: 20px;
`;
