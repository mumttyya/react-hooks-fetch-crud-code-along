import React, { useState } from "react";
import Item from "./Item";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Apple", category: "Produce" },
    { id: 3, name: "Cake", category: "Dessert" },
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [filter, setFilter] = useState("All");

  function handleAddItem(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name,
      category,
    };
    setItems([...items, newItem]);
    setName("");
    setCategory("Produce");
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const itemsToDisplay =
    filter === "All"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <div className="ShoppingList">
      <form className="NewItem" onSubmit={handleAddItem}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <button type="submit">Add to List</button>
      </form>

      <div className="Filter">
        <select
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
