import Searcher from "./Searcher/Searcher";

export const NavBar = () => {
  return (
    <nav className=" w-full  px-6 flex justify-between items-center bg-customBlack">
      <div className="flex items-center justify-center gap-4">
        <img className="w-20" src="./weather.svg" alt="whater icon" />
      </div>
        <Searcher/>
        <p className="font-semibold">Weather App</p>
    </nav>
  );
};
