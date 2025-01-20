import TracksTable from "@/components/TracksTable";
import { Music } from "@/components/ui/Icons";
import { MainTitle, SmallText } from "@/components/ui/Typography";
import { loadGenre } from "@/services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { SongsCountWrapper, TextWrapper, Wrapper } from "./styled";

function Genre() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genre = await loadGenre(genreId);
        setGenre(genre);
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
      <TextWrapper>
        <MainTitle>{genre?.genre?.name}</MainTitle>
        <SongsCountWrapper>
          <Music />
          <SmallText>{genre?.tracks?.length} songs</SmallText>
        </SongsCountWrapper>
      </TextWrapper>

      <TracksTable isLoading={isLoading} tracks={genre?.tracks} />
    </Wrapper>
  );
}

export default Genre;
