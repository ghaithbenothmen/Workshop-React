import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EcmascriptExercises from './components/AppEcmaScript'
import Counter from './components/Counter';
import ListManager from './components/ListManager';
import ColorBox from './components/ColorBox';
import GradeManager from './components/GradeManager';
import TodoList from './components/TodoList';


function App() {
  const [count, setCount] = useState(0)
  const initialItems = ['React', 'Angular', 'Vuejs'];
  const colorOptions = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
  const initialNotes = [15, 10, 18];

  const initialTasks = [
    { name: 'Finir le projet React', priority: 'Haute', completed: false },
    { name: 'Préparer le repas', priority: 'Moyenne', completed: false },
    { name: 'Aller courir', priority: 'Basse', completed: true },
  ];

  return (
    <div className="App">
      <div>
      <h1>Props & State</h1>
      <h1>Exercice 1 : Compteur</h1>
      <Counter initialCount={10} step={5} />
      <h1>Exercice 2 : Liste dynamique</h1>
      <ListManager initialItems={initialItems} placeholder="Entrez un nouveau élément" />
      <h1>Exercice 3 : Changement de couleur dynamique</h1>
      <ColorBox initialColor="#FF5733" colorOptions={colorOptions} />
      <h1>Exercice 4 : Gestionnaire de notes</h1>
      <GradeManager initialNotes={initialNotes} />
      <h1>Exercice 5 : Todo List avec priorités</h1>
      <TodoList initialTasks={initialTasks} />
      </div>
      
      <div>
        <h1>EcmaScript</h1>
      <EcmascriptExercises />
      </div>
    
  </div>
  )
}

export default App
