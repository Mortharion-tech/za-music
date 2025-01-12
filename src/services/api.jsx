import axios from "axios";

const API_CHART_URL = "/chart";
const API_ALL_GENRES_URL = "/genre";

export const loadCharts = async () => {
  try {
    const data = await axios(API_CHART_URL);
    if (!data.data) throw Error();
    console.log("API response:", data.data);
    return data.data;
  } catch (err) {
    throw Error("Failed to load chart!");
  }
};

export const loadGenres = async () => {
  try {
    const data = await axios.get(API_ALL_GENRES_URL);
    console.log("API response:", data.data);
    if (!data.data.data) throw Error();
    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres!");
  }
};
