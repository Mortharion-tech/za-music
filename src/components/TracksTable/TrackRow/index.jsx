import PropTypes from "prop-types";
import {
  IconWrapper,
  SongNumberText,
  StyledIconButton,
  TableData,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWrapper,
  StyledTrackRow,
  TrackSubText,
  TrackTitle,
} from "./styled";
import { formatSecondsToMSS } from "@/utils/time";
import { SubText } from "@/components/ui/Typography";
import { Heart, Play } from "@/components/ui/Icons";

function TrackRow({ track, index }) {
  return (
    <div>
      <StyledTrackRow key={track?.id}>
        <TableData>
          <SongNumberText className="text">{String(index + 1).padStart(2, "0")}</SongNumberText>
          <IconWrapper className="icon">
            <Play />
          </IconWrapper>
        </TableData>
        <TrackInfo>
          <TrackInfoImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
          <TrackInfoTextWrapper>
            <TrackTitle>{track?.title}</TrackTitle>
            <TrackSubText>{track?.artist.name}</TrackSubText>
          </TrackInfoTextWrapper>
        </TrackInfo>
        <TableData>
          <SubText>{formatSecondsToMSS(track?.duration)}</SubText>
        </TableData>
        <TableData>
          <TrackSubText>{track?.album.title}</TrackSubText>
        </TableData>
        <TableData>
          <StyledIconButton width={25} height={25}>
            <Heart />
          </StyledIconButton>
        </TableData>
      </StyledTrackRow>
    </div>
  );
}

TrackRow.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
    index: PropTypes.number,
  }),
};

export default TrackRow;
