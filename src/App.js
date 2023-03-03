import React, { useState } from 'react';
import ToDoList from './ToDoList';
{/* Componente ToDoList
  Non possiamo inserire due elementi html o jsx uno dopo l'altro (il return ne accetta solo uno alla volta), a meno che non mettiamo un tag vuoto per racchiuderli
  
  Dichiaro una variabile const e ci inserisco dentro un'array, determino due valori: todos che saranno gli item della lista e setTodos la funzione che gestirà gli elementi nella lista.

  todoList={todos} passiamo dei dati con le props
*/}
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    name: 'Todo',
    complete: true
  }])
  return (
    <>
      <ToDoList todosList={todos} />
      <input type="text" />
      <button>Add todo</button>
      <button>Clear Complete</button>
      <div> 0 left to do</div>
    </>
  )
}

export default App;
