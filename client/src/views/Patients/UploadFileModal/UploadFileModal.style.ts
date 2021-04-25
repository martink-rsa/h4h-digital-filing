import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    color: ${(props) => props.theme.color.primary};
    font-weight: 500;
  }
  button {
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
  }
`;

export const Form = styled.form``;

export const UploadFileContainer = styled.div`
  h3 {
    color: #080d18;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
`;
