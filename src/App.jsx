import { MainLayout } from "./Layout/MainLayout";
import { NowWeather } from "./Components";
import { TodayHighlights } from "./Components/TodayHighlights/TodayHighlights";
import { CurrentWeatherProvider } from "./Context/CurrentWeatherContext";
import { DailyTemperature } from "./Components/DailyTemperature/DailyTemperature";

function App() {
  return (
    <MainLayout>
      <div className="flex gap-4 mb-4">
        <CurrentWeatherProvider>
          <div className="w-1/4">
            <NowWeather />
          </div>
          <div className="w-3/4">
            <TodayHighlights />
          </div>
        </CurrentWeatherProvider>
      </div>
      <DailyTemperature />
    </MainLayout>
  );
}

export default App;
