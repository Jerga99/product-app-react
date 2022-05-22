
import { useState } from "react";
import "./Counter.css";
import { CounterView } from "./CounterView";

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = (inc) => {
    setCount(count + inc);
  }

  return (
    <div className="counter-container">
      <CounterView counter={count}/>
      <button onClick={() => increment(+100)}>
        Increment Number
      </button>
      <button onClick={() => increment(-50)}>
        Decrement Number
      </button>
      <div>
        Hello World
      </div>
    </div>
  )
}

export default Counter;