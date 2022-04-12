import Todo from './Todo.js'

export default function ToDoList(props) {
    return (
        props.text.map((r) => {
            return (
                <Todo
                    key = {r.id}
                    text = {r}
                    completeToDo = {props.completeToDo}
                    deleteToDo = {props.deleteToDo}
                    
                />
            );
        })
    );
}