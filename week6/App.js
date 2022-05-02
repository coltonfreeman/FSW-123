import './App.css';
import ToDoList from './ToDoList.js';
import {listOfTodos} from './STORE.js';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm.js';

function App() {
  const [todos, setTodos] = useState(listOfTodos);  

  const completeTodo = id => {
    const tempTodos = [...todos];
    const todoID = tempTodos.find(todo => todo.id === id);
    todoID.isCompleted = true;
    setTodos(tempTodos);
  }

  const deleteTodo = (id) => {
    const tempTodos = [...todos];
    const filteredTodos = tempTodos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  const addTodo = (text) => {
    const newTodo = {id: uuidv4(), text: text, isCompleted: false};
    const addedTodos = [...todos, newTodo];
    setTodos(addedTodos);
  }

  const editTodo = (obj, updates) => {
    const tempTodos = [...todos];
    const todoItem = tempTodos.find(todo => todo.id === obj.id);
    todoItem.text = updates;
    setTodos(tempTodos);
  }

  return (
      <>
        <h1>List of Todos</h1>
        <TodoForm addTodo ={addTodo}/>
        <ToDoList todos ={todos} completeTodo ={completeTodo} deleteTodo ={deleteTodo} editTodo ={editTodo}/>
      </>
  );
}

export default App;