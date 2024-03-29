import { useContext } from "react";

import { CurrentWeatherContext } from "../../Context/CurrentWeatherContext";

import { Card } from "../../Common";
import { AirPollution } from "./AirPollution/AirPollution";
import { TodayDetails } from "./TodayDetails/TodayDetails";

export const TodayHighlights = () => {
  const { weather } = useContext(CurrentWeatherContext);

  return (
    <Card className="bg-customBlack">
      <p className="font-bold mb-4">Today highlights</p>
      <div className="flex gap-2 mb-2">
        <AirPollution />
        <Card className="bg-neutral-900/70">
          <p className="mb-2">Max and min temperature</p>
          <div className="w-full flex gap-2">
            <div className="w-full">
              <p>Maximum</p>
              <p>{Math.floor(weather?.main.temp_max)} °C</p>
            </div>
            <div className="w-full">
              <p>Minimum</p>
              <p>{Math.floor(weather?.main.temp_min)} °C</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex gap-2">
        {weather && <TodayDetails weather={weather} />}
      </div>
    </Card>
  );
};
