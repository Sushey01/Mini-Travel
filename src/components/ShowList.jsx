import React, { useState } from "react";
import Form from "./Form";
import "./ShowList.css";
import Item from "./Item";
import Footer from "./Footer"

const ShowList = () => {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  let sortedItems = items;


  if (sortBy === "input") sortedItems = items;


  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list-container">
      <Form onAddItem={handleAddItem} />
      <ul className="list-names">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
            
          />
        ))}
      </ul>

      <div className="two-actions">
        <select
          className="dropdown-list"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button className="clear-list-button" onClick={handleClearList}>
          CLEAR LIST
        </button>
      </div>
      <Footer items={items} />
    </div>
  );
};

export default ShowList;
