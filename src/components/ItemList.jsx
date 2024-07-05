import React from 'react';

const ItemList = ({ data, updateItem, deleteItem, setNewValue }) => {
  return (
    <ul>
      {Object.keys(data).map((item) => (
        <li key={item}>
          {item}: {data[item]}
          <input
            type="text"
            placeholder="New Value"
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={() => updateItem(item)}>Update</button>
          <button onClick={() => deleteItem(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
