import styled from "styled-components";
import { SubText } from "../ui/Typography";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 105px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex["30"]};
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  width: 400px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const TrackImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;

export const ArtistName = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: 130px;
`;

export const TrackTime = styled(SubText)`
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};
`;
