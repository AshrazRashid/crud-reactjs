import React from "react";

function ListComponent({ data, onDelete, onEdit }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onDelete(item.id)}>Delete</button>
          <button onClick={() => onEdit(item.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
