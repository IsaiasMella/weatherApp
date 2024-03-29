import Searcher from "./Searcher/Searcher";

export const NavBar = () => {
  return (
    <nav className=" w-full  px-6 flex justify-between items-center bg-customBlack">
      <div className="flex items-center justify-center gap-4">
        <img className="w-20" src="./weather.svg" alt="whater icon" />
        <p className="font-semibold">Weather App</p>
      </div>
        <Searcher/>
        <button className="bg-green-800 rounded-full py-2 px-4 hover:bg-green-700 hover:scale-110 duration-200">
          Actualizar
        </button>
    </nav>
  );
};
