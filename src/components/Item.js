// src/components/Item.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({ item, index, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(item.name);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteItem(item.id);
  };

  const handleSave = () => {
    editItem({ ...item, name: itemName });
    setIsEditing(false);
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        ) : (
          item.name
        )}
      </td>
      <td>
        <button onClick={isEditing ? handleSave : handleEdit} className="btn btn-warning me-2">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Item;
