import { useCallback, useContext, useEffect, useState } from "react";
import { getForecastWeather } from "../../Services";
import { DayCard } from "./DayCard/DayCard";
import { CityContext } from "../../Context/CityContext";

export const DailyTemperature = () => {
  const [weather, setWeather] = useState();

  const { city } = useContext(CityContext);

  const extractHour = useCallback((dateTime) => {
    // Obtiene la hora en formato 24 horas
    const hour24 = parseInt(dateTime.substring(11, 13), 10);

    // Calcula la hora en formato 12 horas
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

    const amPm = hour24 < 12 ? "AM" : "PM";
    return `${hour12} ${amPm}`;
  }, []);

  useEffect(() => {
    (async () => {
      const currentWeather = await getForecastWeather(city);
      setWeather(currentWeather);
    })();
  }, [city]);
  return (
    <div className="px-2 overflow-x-scroll py-2">
      <h2 className="font-bold mb-2">Today at</h2>
      <div className="flex gap-4">
        {weather?.list?.map((item, index) => (
          <DayCard
            key={index}
            hour={item?.dt_txt}
            icon={item?.weather[0]?.icon}
            temp={item?.main?.temp}
            extractHour={extractHour}
          />
        ))}
      </div>
    </div>
  );
};
