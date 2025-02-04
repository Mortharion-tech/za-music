import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryGrey};
  text-align: left;
`;

export const TableHeading = styled.th`
  padding: 30px 20px 30px ${(props) => (props.first ? "20px" : "0")};
`;

export const TableHeadingTime = styled.th`
  min-width: 140px;
`;

export const Line = styled.td`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 50.54%,
    rgba(198, 198, 198, 0) 98.02%
  );
`;
