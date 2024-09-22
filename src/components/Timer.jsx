import { useState, useEffect } from 'react';

export default function Timer({ onTimeOut, time }) {
  const [remainingTime, setremainingTime] = useState(time);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, time);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setremainingTime((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id='question-time' value={remainingTime} max={time} />;
}
