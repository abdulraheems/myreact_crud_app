// src/components/ItemForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemForm({ addItem }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      addItem({ id: Date.now(), name: itemName });
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default ItemForm;
