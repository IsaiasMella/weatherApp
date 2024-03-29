import { useState, useEffect, useCallback, useContext } from 'react';
import { CityContext } from '../../Context/CityContext';

const offsetInSeconds = -10800

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState('');

  const calculateTimeWithOffset = useCallback(() => {
    // Obtener la hora UTC actual
    const nowUTC = new Date(new Date().toUTCString());
    // Ajustar la hora con el desplazamiento de zona horaria en milisegundos
    const timeWithOffset = new Date(nowUTC.getTime() + offsetInSeconds * 1000);
    
    // Extraer horas, minutos y segundos
    const hours = timeWithOffset.getUTCHours();
    const minutes = timeWithOffset.getUTCMinutes();
    const seconds = timeWithOffset.getUTCSeconds();
    
    // Formatear la hora como HH:MM:SS, asegurando dos dígitos
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, [offsetInSeconds]);

  useEffect(() => {
    const tick = () => {
      setCurrentTime(calculateTimeWithOffset());
    };
    tick(); // Actualizar inmediatamente la hora al montar el componente
    const intervalId = setInterval(tick, 1000); // Actualizar la hora cada segundo

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [calculateTimeWithOffset]);

  return (
    <div>
      <p className='font-light text-xl'>{currentTime} Hs</p>
    </div>
  );
}

export default RealTimeClock;