import { useState } from "react";
import React from "react";

function Example() {
  const [count, setCount] = useState(0);
  console.log({ count });
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export default Example;
