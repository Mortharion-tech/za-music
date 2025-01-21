import { useContext, useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import { PlayerContext, PlayerDispatchContext } from "@/context/playerContext";
import { actions } from "@/context/actions";
import {
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackImage,
  TrackInfoTextWrapper,
  TrackInfoWrapper,
  TrackTime,
  TrackTitle,
  VolumeWrapper,
  Wrapper,
} from "./styled";
import { ContentWrapper } from "../Layout";
import IconButton from "../ui/IconButton";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "../ui/Icons";
import { theme } from "@/styles/Theme";
import { formatSecondsToMSS } from "@/utils/time";

import "rc-slider/assets/index.css";
import PropTypes from "prop-types";

/* const track = {
  id: 3050380851,
  title: "APT.",
  title_short: "APT.",
  title_version: "",
  link: "https://www.deezer.com/track/3050380851",
  duration: 169,
  rank: 992741,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview:
    "https://cdnt-preview.dzcdn.net/api/1/1/b/5/f/0/b5f4d43a587c9c2bf2095881ef5c60d7.mp3?hdnea=exp=1736893679~acl=/api/1/1/b/5/f/0/b5f4d43a587c9c2bf2095881ef5c60d7.mp3*~data=user_id=0,application_id=42~hmac=7f6fedb15338c207f7543e1b0cffd8c49118282fc36f655d7954996273ab1d3e",
  md5_image: "258e6042338ce64bb4157c0c94b232ac",
  position: 1,
  artist: {
    id: 126335112,
    name: "Rose",
    link: "https://www.deezer.com/artist/126335112",
    picture: "https://api.deezer.com/artist/126335112/image",
    picture_small:
      "https://cdn-images.dzcdn.net/images/artist/dca80c50292476001830d88019cdd2f2/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://cdn-images.dzcdn.net/images/artist/dca80c50292476001830d88019cdd2f2/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://cdn-images.dzcdn.net/images/artist/dca80c50292476001830d88019cdd2f2/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://cdn-images.dzcdn.net/images/artist/dca80c50292476001830d88019cdd2f2/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/126335112/top?limit=50",
    type: "artist",
  },
  album: {
    id: 658285691,
    title: "APT.",
    cover: "https://api.deezer.com/album/658285691/image",
    cover_small:
      "https://cdn-images.dzcdn.net/images/cover/258e6042338ce64bb4157c0c94b232ac/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://cdn-images.dzcdn.net/images/cover/258e6042338ce64bb4157c0c94b232ac/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://cdn-images.dzcdn.net/images/cover/258e6042338ce64bb4157c0c94b232ac/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://cdn-images.dzcdn.net/images/cover/258e6042338ce64bb4157c0c94b232ac/1000x1000-000000-80-0-0.jpg",
    md5_image: "258e6042338ce64bb4157c0c94b232ac",
    tracklist: "https://api.deezer.com/album/658285691/tracks",
    type: "album",
  },
  type: "track",
}; */
function Player() {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);
  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.5,
  });
  const audioRef = useRef();

  const togglePlay = () => dispatch({ type: actions.TOGGLE_PLAY });

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 1;
    onVolumeChange(newVolume);
  };

  const onTimeUpdate = () => {
    if (!audioRef?.current) return;

    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  const onTrackTimeDrag = (newTime) => {
    if (!audioRef?.current) return;

    audioRef.current.currentTime = newTime;

    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };

  const onVolumeChange = (newVolume) => {
    if (!audioRef?.current) return;

    audioRef.current.volume = newVolume;

    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  const handleNextSong = () => dispatch({ type: actions.NEXT_SONG });
  const handlePrevSong = () => dispatch({ type: actions.PREV_SONG });

  useEffect(() => {
    if (!audioRef?.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, track, isPlaying]);

  if (!track) {
    return null;
  }

  return (
    <Wrapper>
      <audio
        ref={audioRef}
        src={track.preview}
        controls
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        hidden
        onEnded={handleNextSong}
      />
      <PlayerLayout
        track={track}
        handlePrevSong={handlePrevSong}
        handleNextSong={handleNextSong}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        playerState={playerState}
        onTrackTimeDrag={onTrackTimeDrag}
        toggleVolume={toggleVolume}
        onVolumeChange={onVolumeChange}
      />
    </Wrapper>
  );
}

function PlayerLayout(
  track,
  handlePrevSong,
  handleNextSong,
  togglePlay,
  isPlaying,
  playerState,
  onTrackTimeDrag,
  toggleVolume,
  onVolumeChange,
) {
  return (
    <ContentWrapper display="flex" align-items="center">
      <TrackInfoWrapper>
        <TrackImage src={track?.album?.cover} alt={`${track?.album?.title}'s cover`} />
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title}</TrackTitle>
          <ArtistName>{track?.artist?.name}</ArtistName>
        </TrackInfoTextWrapper>
      </TrackInfoWrapper>
      <ControlsWrapper>
        <IconButton onClick={handlePrevSong}>
          <SkipLeft />
        </IconButton>
        <IconButton onClick={togglePlay} width={55} height={55} withBackground>
          {isPlaying ? <Pause /> : <Play />}
        </IconButton>
        <IconButton onClick={handleNextSong}>
          <SkipRight />
        </IconButton>
      </ControlsWrapper>
      <ProgressWrapper>
        <TrackTime>{formatSecondsToMSS(playerState?.currentTime)}</TrackTime>
        <Slider
          onChange={onTrackTimeDrag}
          step={0.2}
          min={0}
          max={playerState?.duration}
          value={playerState?.currentTime}
          style={{ padding: "3px 0" }}
          trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
          railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
          handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
        />
        <TrackTime>{formatSecondsToMSS(playerState?.duration)}</TrackTime>
      </ProgressWrapper>
      <VolumeWrapper>
        <IconButton onClick={toggleVolume} height={24} width={24}>
          <Volume />
        </IconButton>
        <Slider
          step={0.01}
          min={0}
          max={1}
          value={playerState?.volume}
          onChange={onVolumeChange}
          style={{ padding: "3px 0" }}
          trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
          railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
          handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
        />
      </VolumeWrapper>
    </ContentWrapper>
  );
}

PlayerLayout.propTypes = {
  tracks: PropTypes.shape({
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
  }),
  handlePrevSong: PropTypes.func,
  handleNextSong: PropTypes.func,
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  playerState: PropTypes.shape({
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
  }),
  onTrackTimeDrag: PropTypes.func,
  toggleVolume: PropTypes.func,
  onVolumeChange: PropTypes.func,
};

export default Player;
