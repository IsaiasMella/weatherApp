import { useState, useEffect, useCallback, useContext } from 'react';
import { CurrentWeatherContext } from '../../Context/CurrentWeatherContext';

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState('');
  const { weather } = useContext(CurrentWeatherContext);

  const calculateTimeWithOffset = useCallback(() => {
    // Obtener el UTC actual
    const nowUTC = new Date(new Date().toUTCString());
    // Ajustar la zona horaria en milisegundos
    const timeWithOffset = new Date(nowUTC.getTime() + weather?.timezone * 1000);
    
    const hours = timeWithOffset.getUTCHours();
    const minutes = timeWithOffset.getUTCMinutes();
    const seconds = timeWithOffset.getUTCSeconds();
    
    // Formatear la hora como HH:MM:SS, asegurando dos dígitos
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, [weather]);

  useEffect(() => {
    const clock = () => {
      setCurrentTime(calculateTimeWithOffset());
    };
    clock(); 
    const intervalId = setInterval(clock, 1000); // Actualizar la hora cada segundo

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [calculateTimeWithOffset]);

  return (
    <div>
      <p className='font-light text-xl'>{currentTime} Hs</p>
    </div>
  );
}

export default RealTimeClock;