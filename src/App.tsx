import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import ListView from "./ListView";

const App: React.FC = () => {
  const [list, setList] = useState<number[]>([]);

  // Load saved list from localStorage
  useEffect(() => {
    const savedList = localStorage.getItem("numberList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  const handleAdd = (value: number) => {
    if (!list.includes(value)) {
      setList([...list, value]);
    }
  };

  const handleReset = () => {
    setList([]);
    localStorage.removeItem("numberList");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Counter & List App</h1>
      <Counter onAdd={handleAdd} />
      <ListView items={list} onReset={handleReset} />
    </div>
  );
};

export default App;
