import { Header } from "../components/Header/Header"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { useState } from "react"


export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

        const createNewTodo = (text: string) => {
            const newToDo: ToDo = {
                id: todos.length,
                text: text,
                isDone: false
            }
            setTodos([...todos, newToDo])
        }

        const updateTodo = (toDoItem: ToDo) => {
            const newTodos = todos.map((todo) => {
                if (todo.id === toDoItem.id){
                    todo.isDone = !todo.isDone
                }
                return todo
            })
            setTodos(newTodos)
        }

        const deleteTodo = (toDoItem: ToDo) => {
            const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
        }

    return (
        <>
            <Header />
            <Form createNewTodo={createNewTodo}/>
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </>
    )
}

function aseState(arg0: never[]): [any, any] {
    throw new Error("Function not implemented.")
}
