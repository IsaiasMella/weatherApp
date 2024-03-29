import { API_KEY } from "../Constants";
import { api } from "../Tools/Api";

export const getAirPollution = async (lat, lon) => {
  const optionRequest = {
    url: "http://api.openweathermap.org/data/2.5/air_pollution",
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    },
  };

  return await api(optionRequest);
};
