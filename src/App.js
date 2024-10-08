import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import DisplayClock from './components/ClockComponent';


function CurrentTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return time;
}


function App() {
  const time = CurrentTime();
  return (
    <DisplayClock time={time.toLocaleTimeString()} />
  );
}

export default App;