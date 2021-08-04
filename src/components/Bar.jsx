import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { todoClearAllComplete, todoUserActionActive,todoUserActionComplete,todoUserActionAll} from '../actions/todo';

export const Bar = () => {

    const dispatch = useDispatch();
    
    const handleClearAllCompletedTodos = () => {
        dispatch(todoClearAllComplete());
    }

    const handleAllTodos = () => {
        dispatch(todoUserActionAll());
    }

    const handleActiveTodos = () => {
        dispatch(todoUserActionActive());
    }

    const handleCompleteTodos = () => {
        dispatch(todoUserActionComplete());
    }

    const {todos} = useSelector(state => state.todos);


    return (
        <div className="todo-bar">
            <div className="flex-child">
                <p>{todos.length} items left</p>
            </div>
            <div className="flex-row flex-child">
                <p onClick={handleAllTodos}>All</p>
                <p onClick={handleActiveTodos}>Active</p>
                <p onClick={handleCompleteTodos}>Completed</p>
            </div>
            <div 
                className="flex-child todo-clear"
                onClick={handleClearAllCompletedTodos}>
                <p>Clear completed</p>
            </div>
        </div>
    )
}
