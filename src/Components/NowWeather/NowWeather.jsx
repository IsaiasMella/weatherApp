import { useContext, useEffect, useState } from "react";

import { Card } from "../../Common";
import { CurrentWeatherContext } from "../../Context/CurrentWeatherContext";

export const NowWeather = () => {
  const [currentDate, setCurrentDate] = useState('');

  const { weather } = useContext(CurrentWeatherContext);

  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);

    setCurrentDate(formattedDate);
  }, []);

  return (
    <Card className="bg-customBlack">
      <p className="font-bold">Now</p>
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-2">
          <p className="text-5xl font-bold">
            {Math.floor(weather?.main?.temp)}
          </p>
          <p className="text-3xl font-bold">°c</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
          alt=""
        />
      </div>
      <p>{weather?.weather[0]?.description}</p>
      <hr />
      <p>{currentDate}</p>
    </Card>
  );
};
