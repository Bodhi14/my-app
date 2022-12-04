import { useEffect, useState } from "react";
import { ByeWorld, HelloWorld } from "../components/HelloWorld";
import LimitReached from "../components/LimitReached";
import "./Home.css";

export default function Home() {
  const [Counter, setCounter] = useState(0);

  console.log("The counter value is : ", Counter);

  useEffect(() => {
    document.title = `Clicked ${Counter} times`;
  }, [Counter]); // The content in the useEffect will only change when the counter value changes, i.e, when variables in dependency array change

  const [DecClick, SetDecClick] = useState(false);
  const increment = () => {
    setCounter(Counter + 1);
  };

  const decrement = () => {
    if (Counter === 0) {
      SetDecClick(true);
      return;
    } // taking program control out of the function
    setCounter(Counter - 1);
  };

  function reset() {
    SetDecClick(false);
    setCounter(0);
  }
  return (
    <>
      <div class="home_content">
        <h1>Hello World</h1>
        <HelloWorld text="Hi Bodhi!!!" />
        <div className="space">
          <button onClick={increment}>Increase Counter</button>
          <button onClick={decrement}>Decrease Counter</button>
          <button onClick={reset}>Reset Counter</button>
        </div>
        <h1>{Counter}</h1>
        <ByeWorld comment="Adios Bodhi!!!" />
        {Counter === 0 && DecClick && <LimitReached />}
      </div>
    </>
  );
}
