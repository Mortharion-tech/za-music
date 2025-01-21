import axios from "axios";

const API_BASE_URL = "https://api.deezer.com";
const API_CHART_URL = "/chart";
const API_ALL_GENRES_URL = "/genre";
const API_SEARCH_URL = "/search";
const API_TOP_TRACKS_RADIO_URL = "/radio/37151/tracks";

export async function loadTopRadioTracks() {
  try {
    const data = await axios(`${API_TOP_TRACKS_RADIO_URL}?limit=100`);
    console.log("Radio API response:", data);
    if (!data.data.data) throw Error();
    console.log("Radio API response:", data.data.data);
    return data.data.data;
  } catch (err) {
    throw Error("Failed to load radio!");
  }
}

export async function loadCharts() {
  try {
    const data = await axios(API_CHART_URL);
    if (!data.data) throw Error();
    console.log("Charts API response:", data.data);
    return data.data;
  } catch (err) {
    throw Error("Failed to load chart!");
  }
}

export async function loadGenres() {
  try {
    const data = await axios.get(API_ALL_GENRES_URL);
    console.log("Genres API response:", data.data);
    if (!data.data.data) throw Error();
    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres!");
  }
}

export async function loadGenre(genreId) {
  try {
    const [genreData, radiosData] = await Promise.all([
      axios.get(`${API_ALL_GENRES_URL}/${genreId}`),
      axios.get(`${API_ALL_GENRES_URL}/${genreId}/radios`),
    ]);
    console.log("Genre API response:", genreData, radiosData);

    if (!genreData?.data || !radiosData?.data) throw Error();

    const randomIndex = Math.floor(Math.random() * radiosData.data.data.length);

    const tracksData = await axios(radiosData[randomIndex].tracklist.replace(API_BASE_URL, ""));

    return {
      genre: genreData.data,
      tracks: tracksData.data.data,
    };
  } catch (err) {
    throw Error("Failed to load this genre!");
  }
}

export async function search(searchQuery) {
  try {
    const data = await axios.get(`${API_SEARCH_URL}?q=${searchQuery}`);
    console.log("Search API response:", data.data.data);
    if (!data.data.data) throw Error();
    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks!");
  }
}
