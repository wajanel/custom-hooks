import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import { useEffect } from "react";

const initialState = [
]

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = ()=>{

    
    
    const handleNewToDo = (todo) => {
        console.log('handleNewToDo', todo);
    
        const obj = {
            type: '[TODO] add',
            payload: todo
        }
    
        dispatch(obj);
    }
    
    const handleRemoveToDo = (todo) => {
        console.log('handleRemoveToDo', todo);
    
        const obj = {
            type: '[TODO] remove',
            payload: todo.id
        }
    
        dispatch(obj);
    }
    
    const handleToggleToDo = (todo) => {
        console.log('handleToggleToDo', todo);
    
        const obj = {
            type: '[TODO] toggle',
            payload: todo.id
        }
    
        dispatch(obj);
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const pending = ()=>{
        return todos.filter(todo => todo.done === false).length
    }
    
    return ({
        todos,
        handleNewToDo,
        handleRemoveToDo,
        handleToggleToDo,
        todosCount: todos.length,
        todosPending: pending()
    })

}