import { API_KEY } from "../Constants";
import { api } from "../Tools/Api";

export const getCurrentWeather = async (city = 'Buenos Aires') => {
  const optionRequest = {
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  };

  return await api(optionRequest);
};

export const getForecastWeather = async (city = 'Buenos Aires') => {
  const optionRequest = {
    url: "http://api.openweathermap.org/data/2.5/forecast",
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  };

  return await api(optionRequest);
};
