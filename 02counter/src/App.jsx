import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  //let counter = 20;

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Vite</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
  );
}

export default App;
