import { API_KEY } from "../Constants";
import { api } from "../Tools/Api";

export const getCities = async (city = 'Buenos Aires') => {
    const optionRequest = {
      url: "http://api.openweathermap.org/geo/1.0/direct",
      params: {
        q: city,
        appid: API_KEY,
        limit: 5,
      },
    };
  
    return await api(optionRequest);
  };