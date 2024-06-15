import { useState, useEffect, useRef } from 'react';

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const displayHours = hours < 10 ? '0' + hours : hours;
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  const displaySeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  return `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
};

const useCountdown = (initialSeconds) => {
  const [seconds, setSeconds] = useState(() => {
    const storedSeconds = localStorage.getItem('countdown_timer');
    return storedSeconds !== null ? parseInt(storedSeconds) : initialSeconds;
  });
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timerRef.current);
          localStorage.removeItem('countdown_timer');
          return 0;
        }
        const newSeconds = prevSeconds - 1;
        localStorage.setItem('countdown_timer', newSeconds);
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return formatTime(seconds);
};

export default useCountdown;
