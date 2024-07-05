import React, { useState, useEffect } from 'react';
import { fetchData, addItem, updateItem, deleteItem } from './services/api';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const [data, setData] = useState({});
  const [newItem, setNewItem] = useState('');
  const [newValue, setNewValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then(response => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);

  const handleAddItem = async () => {
    if (newItem && newValue) {
      setData(prevData => ({ ...prevData, [newItem]: newValue }));
      try {
        await addItem({ name: newItem, value: newValue });
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  const handleUpdateItem = async (item) => {
    if (newValue) {
      setData(prevData => ({ ...prevData, [item]: newValue }));
      try {
        await updateItem(item, newValue);
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };

  const handleDeleteItem = async (item) => {
    setData(prevData => {
      const updatedData = { ...prevData };
      delete updatedData[item];
      return updatedData;
    });
    try {
      await deleteItem(item);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1> API App</h1>
      <div>
        <input
          type="text"
          placeholder="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ItemList
        data={data}
        updateItem={handleUpdateItem}
        deleteItem={handleDeleteItem}
        setNewValue={setNewValue}
      />
    </div>
  );
}

export default App;
