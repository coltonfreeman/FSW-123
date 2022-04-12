export default function Todo(props) {
    return(
        <li id={props.text.key} style={{textDecoration: props.text.isCompleted ? "line-through" : "" }}>
            <input type="checkbox" onChange={() => props.completeToDo(props.text, props.text.id)}></input>
            <label>{props.text.text}</label>
            <button onClick={() => props.deleteToDo(props.text.id)}>X</button>
        </li>
    )
}