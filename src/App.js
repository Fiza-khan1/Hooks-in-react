
import './App.css';
import React, { useEffect, useState ,useRef } from 'react';

function App() {
  const [first, setFirst] = useState(0);
  const a = useRef(0);
  useEffect(() => {
    a.current += 1;
    console.log(`The value of a is ${a.current}`);
  }, );
  return (
    <div>
      <p>The value of 'first' is: {first}</p>
      <button onClick={() => setFirst(first + 1)}>Increment first</button>

    </div>             
  );
}
export default App;
