import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 0;

  let [counter, setCounter] = useState(0);

  function addValue() {
    if (counter >= 20) {
      console.log("value greater than 20 not allowed");
      return;
    }
    setCounter(counter + 1);
  }

  function deleteValue() {
    if (counter <= 0) {
      console.log("value less than 0 not allowed");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={deleteValue}>Delete Value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
