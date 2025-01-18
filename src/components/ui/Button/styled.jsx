import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 18px 35px;
  margin-top: 52px;
  box-shadow:
    0px 0px 0px 0px #07152c1c,
    0px 1px 3px 0px #07152c1c,
    2px 6px 6px 0px #07152c17,
    4px 13px 8px 0px #07152c0d,
    7px 23px 9px 0px #07152c05,
    10px 35px 10px 0px #07152c00;
  border-radius: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
