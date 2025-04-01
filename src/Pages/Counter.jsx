import React from "react";
import { Counter2 } from "../../JavaScript/zustand ";

function Counter() {
  const data2 = Counter2();
  console.log(data2);
  const { count,add, minus,del } = data2;

  return (
    <div>
      <button onClick={add}>+</button>
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={del}>del</button>
    </div>
  );
}

export default Counter;
