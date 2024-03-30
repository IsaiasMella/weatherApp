import { createContext, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("Buenos Aires")

  const value = {
    setCity,
    city,
  }

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
};
