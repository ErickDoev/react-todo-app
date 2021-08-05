import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { todoClearAllComplete, todoUserActionActive,todoUserActionComplete,todoUserActionAll} from '../actions/todo';

export const Bar = () => {

    const dispatch = useDispatch();
    
    const handleClearAllCompletedTodos = () => {
        dispatch(todoClearAllComplete());
    }

    const handleAllTodos = () => {
        dispatch(todoUserActionAll());
        setActive(1);
    }

    const handleActiveTodos = () => {
        dispatch(todoUserActionActive());
        setActive(2);
    }

    const handleCompleteTodos = () => {
        dispatch(todoUserActionComplete());
        setActive(3);
    }

    const {todos} = useSelector(state => state.todos);
    const todosVal = todos.filter(todo => !todo.isCompleted);

    const [active, setActive] = useState(1);

    return (
        <div className="todo-bar">
            <div className="flex-child">
                <p>{todosVal.length} items left</p>
            </div>
            <div className="flex-row flex-child">
                <p 
                    className={active===1?"p-active":""}
                    onClick={handleAllTodos}
                    >All</p>
                <p 
                    className={active===2?"p-active":""}
                    onClick={handleActiveTodos}>Active</p>
                <p 
                    className={active===3?"p-active":""}
                    onClick={handleCompleteTodos}>Completed</p>
            </div>
            <div 
                className="flex-child todo-clear"
                onClick={handleClearAllCompletedTodos}>
                <p>Clear completed</p>
            </div>
        </div>
    )
}
