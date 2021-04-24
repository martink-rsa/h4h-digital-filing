import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export const TableHeaderContainer = styled.div``;

export const TableTitle = styled.h3`
  margin: 0;
  text-align: left;
  font-weight: 500;
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th {
    background-color: #fff;
    text-align: left;
    padding: 20px 0;
    font-weight: 500;
  }
  tr {
    :nth-child(odd) {
      background: ${(props) => props.theme.color.gray[100]};
    }
    td {
      padding: 20px 0;
    }
  }
`;
