import React, { useState } from 'react';

function ListManager({ initialItems = [], placeholder = "Entrez un nouveau élément" }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Liste :</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={addItem}>Ajouter</button>
    </div>
  );
}

export default ListManager;