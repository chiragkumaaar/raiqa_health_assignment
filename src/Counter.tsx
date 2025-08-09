import React, { useState } from "react";

interface CounterProps {
  onAdd: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const addToList = () => {
    if (count > 0) {
      onAdd(count);
      setCount(0);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default Counter;
