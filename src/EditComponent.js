import React, { useState } from "react";

function EditComponent({ item, onUpdate }) {
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  const handleUpdate = () => {
    onUpdate(item._id, { title: title, content: content });
  };

  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Content</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}

export default EditComponent;
