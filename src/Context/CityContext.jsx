import { createContext, useEffect, useState } from "react";
import { getCurrentWeather } from "../Services";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("Buenos Aires")
  const [error, setError] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const currentCity = await getCurrentWeather();
//         setCity(currentCity);
//       } catch (err) {
//         console.error(err);
//         setError("No se pudo obtener el clima");
//       }
//     })();
//   }, []);

  const value = {
    setCity,
    city,
    error,
  }

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
};
