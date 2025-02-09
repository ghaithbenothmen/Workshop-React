import React, { useState } from 'react';

function TodoList({ initialTasks = [] }) {

  const [tasks, setTasks] = useState(initialTasks);

  const [newTask, setNewTask] = useState('');
 
  const [priority, setPriority] = useState('Moyenne');
  
  const [searchTerm, setSearchTerm] = useState('');


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, priority, completed: false }]);
      setNewTask('');
    }
  };

 
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <h1>Todo List avec Priorités</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher une tâche"
      />


      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.priority} {task.completed ? 'Terminé' : 'Non terminé'}{' '}
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? 'Marquer non terminé' : 'Marquer terminé'}
            </button>
            <button onClick={() => removeTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>


      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nom de la tâche"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>

     
      <p>Total des tâches : {totalTasks}</p>
      <p>Tâches terminées : {completedTasks}</p>
    </div>
  );
}

export default TodoList;