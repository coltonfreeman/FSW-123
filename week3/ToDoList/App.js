import {useState} from 'react';
import './styles.css';
import ToDoList from './TodoList.js';
import listOfTodos from './STORE.js'


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

  return (
    <div id="moreTodos">
      <h1>List of Todo's</h1>
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