import {useState} from 'react';
import './styles.css';
import ToDoList from './TodoList.js';
import { listOfTodos } from './STORE.js'
import {v4 as uuid} from "uuid"
import TodoForm from './TodoForm';


function App() {
  const [todos, selectToDo] = useState(listOfTodos)

  const completeToDo = (selectText, selectID) => {
    const contList = [...todos];
    const selItem = contList.findIndex(r => r.id === selectID);

    if (selectText.isCompleted === false)
      selectText.isCompleted = true;
    else if (selectText.isCompleted === true)
      selectText.isCompleted = false;

    contList.splice(selItem, 1, selectText)
    selectToDo(contList);
  }

  const deleteToDo = (selID) => {
    const copyList = [...todos];
    const targetItem = copyList.findIndex(r => r.id === selID);
    copyList.splice(targetItem, 1)
    selectToDo(copyList);
  }

    const addTodo = text => {
    const copyList = [...todos];
    const newEntry = {text: `${text}`, id: uuid(), isCompleted: false};
    copyList.push(newEntry);
    selectToDo(copyList);
  }

  return (
    <div id="moreTodos">
      <h1>Todo App</h1>
      <TodoForm addTodo = {addTodo} />
      <ul>
        <ToDoList 
          text = {todos}
          completeToDo = {completeToDo}
          deleteToDo = {deleteToDo}
        />
      </ul>

      </div>
  );
}

export default App;