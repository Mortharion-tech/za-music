import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "@/common/constants";
import { device } from "@/styles/BreakPoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }

  ${device.md} {
    gap: 72px;
    padding-top: 28px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SongsCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
