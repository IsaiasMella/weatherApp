import { useContext, useEffect, useRef, useState } from "react";
import { getCities } from "../../../Services";
import { CityContext } from "../../../Context/CityContext";

const Searcher = () => {
  const [cities, setCities] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchCity, setSearchCity] = useState("");

  const { setCity } = useContext(CityContext);

  const optionsRef = useRef(null);

  const handlerChange = (e) => {
    const value = e.target.value;

    setSearchCity(value);
    if (value.length > 2) {
      getCities(value).then((data) => {
        setCities(data);
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
    }
  };

  const handlerSelectedoption = (city) => {
    setSearchCity(city);
    setCity(city);
    setIsVisible(false);
  };

  const handleVisibleOptions = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Agrega el evento para saber si hace click fuera de las opciones
    document.addEventListener("mousedown", handleVisibleOptions);
    return () => {
      // Remueve el evento puesto anteriormente
      document.removeEventListener("mousedown", handleVisibleOptions);
    };
  }, []);

  return (
    <div className="relative w-3/12" ref={optionsRef}>
      <input
        onChange={handlerChange}
        value={searchCity}
        type="text"
        className="rounded-full px-6 py-2 outline-none w-full"
        placeholder="Search"
      />
      {cities && isVisible && (
        <ul className="w-full absolute top-12 left-0 bg-neutral-900 rounded-xl flex flex-col gap-2 overflow-hidden">
          {cities.map((city, index) => (
            <li
              key={index}
              className="hover:bg-neutral-800 cursor-pointer px-6 py-2"
              onClick={() => handlerSelectedoption(city.name)}
            >
              {city.name}
              <hr className="border-neutral-500/50 mt-1" />
              <div className="flex justify-between">
                <p className="text-neutral-500/50">{city.country}</p>
                {city.state && (
                  <p className="text-neutral-500/50">{city.state}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searcher;
