import React from "react";

function Item({ id, name, category, onDelete }) {
  function handleDeleteClick() {
    onDelete(id);
  }

  return (
    <li>
      <span>{name}</span>{" "}
      <span className="category">{category}</span>{" "}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
