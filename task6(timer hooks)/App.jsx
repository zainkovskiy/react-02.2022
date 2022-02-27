import React, { useState, useEffect, useRef } from 'react';

function setDefaultCount () {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
}

export function App () {
const [count, setCount] = useState(setDefaultCount());
const [startTimer, setStartTimer] = useState(false);
const timerRef = useRef(null);

const handleStart = () => {
  setStartTimer(true);
}

const handleStop = () => {
  setStartTimer(false);
}

const resetTimer = () => {
  setCount(0);
  setStartTimer(false);
}

useEffect(() => {
  localStorage.setItem('count', count);
}, [count]);

useEffect(() => {
  if (startTimer){
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }
  return () => {
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = null;
  }
}, [startTimer]);

return <div className="app">
          <h2>React Timer</h2>
          <h3>{count}</h3>
          <div>
            {
              !startTimer ? <button onClick={handleStart}>Start</button> :
                  <button onClick={handleStop}>Stop</button>
            }
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
}
