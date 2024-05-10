import React from "react";

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type={"checkbox"}
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

export default Item;