import React, { useState } from 'react';

function GradeManager({ initialNotes = [] }) {

  const [notes, setNotes] = useState(initialNotes);

  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote('');
    } else {
      alert("La note doit être comprise entre 0 et 20.");
    }
  };

  const removeNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };


  const average = notes.length > 0 ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : 0;

  return (
    <div>
      <h1>Gestionnaire de notes</h1>

   
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            Note : {note} <button onClick={() => removeNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Entrez une nouvelle note"
      />
      <button onClick={addNote}>Ajouter</button>

      <p>Moyenne des notes : {average}</p>
    </div>
  );
}

export default GradeManager;