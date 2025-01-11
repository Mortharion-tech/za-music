import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const TextWrapper = styled.div`
  padding-left: 123px;
`;

export const PlayButton = styled.button`
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
  display: flex;
  gap: 14px;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
