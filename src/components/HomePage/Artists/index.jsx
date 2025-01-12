import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Wrapper, ArtistsWrapper, ArtistsSkeletonWrapper } from "./styled";
import ArtistCard from "./ArtistCard";

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <Skeleton
              wrapper={ArtistsSkeletonWrapper}
              key={num}
              height={116}
              width={220}
              borderRadius={25}
            />
          ))}
        <Swiper slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            artists?.map((artist) => (
              <SwiperSlide key={artist.id} style={{ width: "auto" }}>
                <ArtistCard name={artist.name} image={artist.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistsWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;
