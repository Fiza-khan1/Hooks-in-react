import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log("useEffect triggered")
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      console.log("Interval ID:", intervalRef.current);
    } else {
      console.log("Stopping interval");
      console.log("Interval ID:", intervalRef.current);
      clearInterval(intervalRef.current);
      console.log("Interval cleared:", intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Simple Timer</h1>
      <div className="d-flex justify-content-center mb-3">
        <div className="display-4">{seconds} seconds</div>
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={handleStart} className="btn btn-success mr-2" disabled={isActive}>Start</button>
        <button onClick={handleStop} className="btn btn-danger mr-2" disabled={!isActive}>Stop</button>
        <button onClick={handleReset} className="btn btn-warning">Reset</button>
      </div>
    </div>
  );
}

export default Timer;
