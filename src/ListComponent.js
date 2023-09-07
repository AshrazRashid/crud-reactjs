import React from "react";

function ListComponent({ data, onDelete, onEdit }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => onDelete(item._id)}>Delete</button>
          <button onClick={() => onEdit(item._id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
