import { useState, useEffect } from 'react';

export default function Timer({ onTimeOut, time, mode }) {
  const [remainingTime, setremainingTime] = useState(time);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, time);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setremainingTime((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return <progress id='question-time' value={remainingTime} max={time} className={mode} />;
}
