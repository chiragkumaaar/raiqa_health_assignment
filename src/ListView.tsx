import React, { useState, useEffect } from "react";

interface ListViewProps {
  items: number[];
  onReset: () => void;
}

const ListView: React.FC<ListViewProps> = ({ items, onReset }) => {
  const [sortAsc, setSortAsc] = useState(true);


  useEffect(() => {
    localStorage.setItem("numberList", JSON.stringify(items));
  }, [items]);

  const sortedItems = [...items].sort((a, b) =>
    sortAsc ? a - b : b - a
  );

  const highest = Math.max(...items);
  const lowest = Math.min(...items);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setSortAsc(!sortAsc)}>
        Sort {sortAsc ? "Descending" : "Ascending"}
      </button>
      <button onClick={onReset} style={{ marginLeft: "10px" }}>
        Reset List
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedItems.map((num, index) => (
          <li
            key={index}
            style={{
              color: num === highest ? "green" : num === lowest ? "red" : "black",
              fontWeight: num === highest || num === lowest ? "bold" : "normal"
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
