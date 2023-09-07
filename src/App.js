import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { deleteData, fetchData, updateData } from "./api";
import EditComponent from "./EditComponent";
import ListComponent from "./ListComponent";

function App() {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const handleEdit = (id) => {
    setEditingItem(id);
  };

  const handleUpdate = (id, data) => {
    updateData(id, data).then((updatedItem) => {
      setData((prevData) =>
        prevData.map((item) =>
          item._id === updatedItem._id ? updatedItem : item
        )
      );
      setEditingItem(null);
    });
  };

  const handleDelete = (id) => {
    deleteData(id).then(() => {
      setData((prevData) => prevData.filter((item) => item._id !== id));
    });
  };

  return (
    <div>
      <h1>CRUD with APIs in React</h1>
      {editingItem !== null ? (
        <EditComponent
          item={data.find((item) => item._id === editingItem)}
          onUpdate={handleUpdate}
        />
      ) : (
        <ListComponent
          data={data}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default App;
