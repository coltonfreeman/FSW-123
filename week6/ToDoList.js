import Todo from './Todo.js';

function ToDoList({todos, completeTodo, deleteTodo, editTodo}) {

    const ToDoList = todos.map((todo) => {return <Todo todo ={todo} key ={todo.id} completeTodo ={completeTodo} deleteTodo ={deleteTodo} editTodo ={editTodo}/>});
    return (
        <ul>
            <div className="divItems">
                {ToDoList}
            </div>
        </ul>
    );
}

export default ToDoList;