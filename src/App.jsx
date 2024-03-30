import { MainLayout } from "./Layout/MainLayout";
import { NowWeather } from "./Components";
import { TodayHighlights } from "./Components/TodayHighlights/TodayHighlights";
import { CurrentWeatherProvider } from "./Context/CurrentWeatherContext";
import { DailyTemperature } from "./Components/DailyTemperature/DailyTemperature";
import RealTimeClock from "./Common/Clock/Clock";
import { useContext } from "react";
import { CityContext } from "./Context/CityContext";

function App() {
  const { city } = useContext(CityContext);
  return (
    <MainLayout>
      <CurrentWeatherProvider>
        <div className="flex flex-col text-center mb-4">
          <p className="text-5xl font-bold ">{city}</p>
          <RealTimeClock />
        </div>
        <div className="flex gap-4 mb-2">
          <div className="w-1/4">
            <NowWeather />
          </div>
          <div className="w-3/4">
            <TodayHighlights />
          </div>
        </div>
      </CurrentWeatherProvider>
      <DailyTemperature />
    </MainLayout>
  );
}

export default App;
