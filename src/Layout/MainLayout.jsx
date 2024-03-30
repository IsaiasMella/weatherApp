import { useContext } from "react";
import { NavBar } from "../Components";
import { popularCities } from "../Constants/cities";
import { CityContext } from "../Context/CityContext";

export const MainLayout = ({ children }) => {
  const { setCity, city } = useContext(CityContext);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex-grow flex overflow-hidden">
        <div className="min-w-72 bg-customBlack overflow-auto">
          <p className="font-bold text-2xl p-4 mb-2">Ciudades populares</p>
          <div className="mt-4">
            {popularCities.map((popularCity) => (
              <div
                key={popularCity}
                className={`relative hover:bg-neutral-800 w-full pl-4 border-l-4  ${
                  popularCity === city
                    ? " border-slate-100 bg-neutral-800"
                    : "border-transparent"
                } `}
                onClick={() => setCity(popularCity)}
              >
                <p className="py-2 pl-4 hover:font-bold cursor-pointer">
                  {popularCity}
                </p>
              </div>
            ))}
          </div>
        </div>
        <main className="flex-grow p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
