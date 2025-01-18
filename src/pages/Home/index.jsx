import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadCharts, loadTopRadioTracks } from "@/services/api";
import { SectionTitle } from "@/components/ui/Typography";
import TracksTable from "@/components/TracksTable/";
import { Hero, Genres, Artists } from "@/components/HomePage";
import { GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";

//  Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const [radio, setRadio] = useState();
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [chart, radio] = await Promise.all([loadCharts(), loadTopRadioTracks()]);
        console.log("API response:", data);
        setChart(chart);
        setRadio(radio);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Trending right now</SectionTitle>
          <TracksTable isLoading={isLoading} tracks={chart?.tracks?.data} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </main>
  );
}

export default Home;
