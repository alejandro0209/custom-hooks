import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || [])
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)


   
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const todosCount= todos.length;

    const todosPending = todos.filter( todo => !todo.done).length;


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        }
        )
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        }
        )
    }


    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos,
        todosCount,
        todosPending,
    }
}
