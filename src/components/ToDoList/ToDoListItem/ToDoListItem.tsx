import { ToDo } from '../../../models/todo-item'
import './ToDoListItem.scss'

export const ToDoListItem = (props: { toDoItem: ToDo, updateTodo: Function, deleteTodo: Function }) => {
    return (
        <li className="todo-list-item__wrapper">
            <span>{props.toDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button
                    className="btn-trash"
                    onClick={() => props.deleteTodo(props.toDoItem)}>
                </button>
                <button
                    className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}
                    onClick={() => props.updateTodo(props.toDoItem)}>
                </button>
            </div>
        </li>
    )
}