import React, { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SectionSubtitle } from "@/components/ui/Typography";
import {
  Wrapper,
  TitleRow,
  ButtonsWrapper,
  Button,
  GenresWrapper,
  GenreSkeletonWrapper,
} from "./styled";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import GenreCard from "./GenreCard";
import { loadGenres } from "@/services/api";

function Genres() {
  const [genres, setGenres] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadGenres();
        setGenres(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>Genres</SectionSubtitle>
        <ButtonsWrapper>
          <Button withBackground width={36} height={36} onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button withBackground width={36} height={36} onClick={handleNext}>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenresWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              key={num}
              height={116}
              width={220}
              borderRadius={25}
            />
          ))}
        <Swiper ref={sliderRef} slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {genres?.map((genre) => (
            <SwiperSlide key={genre.id} style={{ width: "auto" }}>
              <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />
            </SwiperSlide>
          ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}

export default Genres;
