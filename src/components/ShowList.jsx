import React, { useState } from "react";
import Form from "./Form";
import "./ShowList.css";

const ShowList = () => {
  const [items, setItems] = useState([]);


  const [sortBy, setSortBy] = useState("input")

  let sortedItems;

  if (sortBy==="input") sortedItems = items;


  if (sortBy==="description")
    sortedItems=items.slice()
  .sort((a,b)=> a.description.localCompare(b.description));


  if (sortBy==="packed")
    sortedItems=items.slice()
  .sort((a,b)=>Number(a.packed)-(b.packed))

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?"))
      setItems([]);
  }

  function handleTogglePacked(id) {
    setItems((items) =>
    items.map((item) =>
      item.id === id
        ? {
            ...item,
            status:
              item.status === "none"
                ? "packed"
                : item.status === "packed"
                ? "cancelled"
                : "none",
          }
        : item
    )
    );
  }

  function handleAddItem(newList) {
    setItems([...items, newList]);
  }

  return (
    <div className="list-container">
      <Form onAddItem={handleAddItem} />
      <ul className="list-names">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleTogglePacked(item.id)}
            className={`item ${item.status}`}
          >
            {item.quantity} x {item.name} {""}
            {item.status === "packed" && "✅"}
            {item.status === "cancelled" && "❌"}
          </li>
        ))}
      </ul>

      <div className="two-actions">
        <select className="dropdown-list" value={sortBy} onChange={(e)=> setSortBy(e.target.value)} >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button className="clear-list-button" onClick={handleClearList}>
          CLEAR LIST
        </button>
      </div>
    </div>
  );
};

export default ShowList;
