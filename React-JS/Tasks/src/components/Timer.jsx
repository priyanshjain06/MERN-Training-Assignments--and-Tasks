import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return <h2>Time: {time}s</h2>;
};

export default Timer;
