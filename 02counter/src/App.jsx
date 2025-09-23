import { useState } from "react";

import "./App.css";

//-------Concepts-------//

//1. Hooks:
//Special functions that let us hook into react features (state, lifecycle, etc.)
//useState is one of the most common hooks.

//2. States:
//A way for react components to remember values between renders.

function App() {
  //1. counter is the state, initially set to 10
  //2. setCounter updates the state.
  //3. after updation, react re-renders the component, so UI stays in sync with data.
  const [counter, setCounter] = useState(10);

  //without any hooks, simple variable will not change the state as we will not be able to use state in the  first place. So, re-rendering will not happen, and hence the count stays the same on the screen.
  //let counter = 20;

  const addValue = () => {
    //when set counter is called,
    //1. counter state is updated
    //2. App is re-rendered
    //3. UI is updated wherever counter is used
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    //<> </> is called Fragment.
    //allows to return multiple jsx elements without wrapping them in an extra div.
    <>
      <h1>React Vite</h1>
      //injecting state variable into JSX.
      <h2>Counter: {counter}</h2>
      //attaching an event listener which calls addValue
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
  );
}

export default App;
