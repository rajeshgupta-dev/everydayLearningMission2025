import React, { useEffect } from "react";
import { useState } from "react";

const CountDown = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  function reset() {
    setIsRunning(false);
    setCount(0);
  }
  function start() {
    // setCount(inputValue);
    setIsRunning(true);
  }
  function pause() {
    setIsRunning(false);
  }
  return (
    <div>
      <h1>CountDown</h1>
      <div>
        <p>{count}</p>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isRunning}
      />

      <button onClick={isRunning ? pause : start}>
        {isRunning && count > 0 ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountDown;
