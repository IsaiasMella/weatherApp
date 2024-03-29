import { useCallback } from "react";
import { Card } from "../../../Common";

export const TodayDetails = ({ weather }) => {
  const metersToKilometers = useCallback((meters) => {
    const kilometers = meters / 1000;
    return kilometers.toFixed(1);
  }, []);
  return (
    <>
      <Card className="bg-neutral-900/70">
        <p>Humidity</p>
        <p>{weather.main.humidity}%</p>
      </Card>
      <Card className="bg-neutral-900/70">
        <p>Pressure</p>
        <p>{weather.main.pressure} hPa</p>
      </Card>
      <Card className="bg-neutral-900/70">
        <p>Visibility</p>
        <p>{metersToKilometers(weather?.visibility)} Km</p>
      </Card>
      <Card className="bg-neutral-900/70">
        <p>Feels Like</p>
        <p>{Math.floor(weather?.main.feels_like)}°C</p>
      </Card>
    </>
  );
};
