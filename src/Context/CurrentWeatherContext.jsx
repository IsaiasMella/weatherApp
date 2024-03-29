import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentWeather } from "../Services";
import { CityContext } from "./CityContext";

export const CurrentWeatherContext = createContext();

export const CurrentWeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState();
  const [error, setError] = useState(null);

  const { city } = useContext(CityContext);

  useEffect(() => {
    (async () => {
      try {
        const currentWeather = await getCurrentWeather(city);
        setWeather(currentWeather);
      } catch (err) {
        console.error(err);
        setError("No se pudo obtener el clima");
      }
    })();
  }, [city]);

  return (
    <CurrentWeatherContext.Provider value={{ weather, error }}>
      {children}
    </CurrentWeatherContext.Provider>
  );
};
