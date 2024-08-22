// src/components/ItemList.js
import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList({ items, deleteItem, editItem }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <Item key={item.id} item={item} index={index} deleteItem={deleteItem} editItem={editItem} />
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
