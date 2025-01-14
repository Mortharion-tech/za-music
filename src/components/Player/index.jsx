import Slider from "rc-slider";
import {
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackImage,
  TrackInfoTextWrapper,
  TrackInfoWrapper,
  TrackTime,
  VolumeWrapper,
  Wrapper,
} from "./styled";
import { ContentWrapper } from "../Layout";
import { Text } from "../ui/Typography";
import IconButton from "../ui/IconButton";
import { Play, SkipLeft, SkipRight, Volume } from "../ui/Icons";

const track = {
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
};

function Player() {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfoWrapper>
          <TrackImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
          <TrackInfoTextWrapper>
            <Text>{track?.title}</Text>
            <ArtistName>{track?.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton>
            <SkipLeft />
          </IconButton>
          <IconButton width={55} height={55} withBackground>
            <Play />
          </IconButton>
          <IconButton>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>0:00</TrackTime>
          <Slider />
          <TrackTime>2:30</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <Volume />
          <input type="range" />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Player;
