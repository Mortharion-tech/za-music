import { TextWrapper } from "@/components/HomePage/Hero/styled";
import { Music } from "@/components/ui/Icons";
import { MainTitle, SmallText } from "@/components/ui/Typography";
import { loadGenre } from "@/services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Genre() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genre = await loadGenre(genreId);
        console.log("API response:", data);
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
    <div>
      <TextWrapper>
        <MainTitle>{genre.name}</MainTitle>
        <SongsCountWrapper>
          <Music />
          <SmallText></SmallText>
        </SongsCountWrapper>
      </TextWrapper>
    </div>
  );
}

export default Genre;
