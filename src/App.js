import { HelloWorld, ByeWorld } from "./components/HelloWorld";
import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  const [Counter, setCounter] = useState(0);

  console.log("The counter value is : ", Counter);

  useEffect(() => {
    document.title = `Clicked ${Counter} times`;
  }, [Counter]); // The content in the useEffect will only change when the counter value changes, i.e, when variables in dependency array change

  const increment = () => {
    setCounter(Counter + 1);
  };

  const decrement = () => {
    if (Counter === 0) return; // taking program control out of the function
    setCounter(Counter - 1);
  };

  function reset() {
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <HelloWorld text="Hi Bodhi!!!" />
      <ByeWorld comment="Adios Bodhi!!!" />
      <button onClick={increment}>Increase Counter</button>
      <button onClick={decrement}>Decrease Counter</button>
      <button onClick={reset}>Reset Counter</button>
      <h1>{Counter}</h1>
    </div>
  );
}
