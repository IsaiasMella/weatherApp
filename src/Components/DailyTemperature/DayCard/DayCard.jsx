import { Card } from "../../../Common";

export const DayCard = ({extractHour, hour, icon, temp}) => {
  return (
    <Card className="bg-customBlack flex flex-col items-center justify-center gap-2 min-w-40 text-center">
      <p className="font-bold">{extractHour(hour)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
      />
      <div className="flex justify-center">
        <p className="text-xl font-bold">{Math.floor(temp)}</p>
        <p className="text-xl">°</p>
      </div>
    </Card>
  );
};
