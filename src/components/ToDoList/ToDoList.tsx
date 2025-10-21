import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"

export const ToDoList = (props: {todos: ToDo[], updateTodo: Function, deleteTodo: Function}) => {

    const ckeckedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem toDoItem={item} key={idx} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
                )
            })
    }
    const unCkeckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem toDoItem={item} key={idx} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
                )
            })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {ckeckedList()}
            </ul>
            <ul className="todo-list completed">
                {unCkeckedList()}
            </ul>
        </div>
    )
}