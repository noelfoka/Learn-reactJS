import React, { useState } from "react";

function Counter(props) {
  const { count, increment, decrement } = props;

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        Increase
      </button>
      <button type="button" onClick={decrement}>
        Decrease
      </button>
    </div>
  );
}

function CounterContainer() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default CounterContainer;
