import React, { useState, useRef, useEffect } from 'react';

function PreviousState() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();  

  useEffect(() => {
    prevCountRef.current = count;   
  }, [count]);

  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousState;
