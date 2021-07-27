import React from 'react'
import { useDispatch} from 'react-redux';
import { todoClearAllComplete} from '../actions/todo';

export const Bar = () => {



    const dispatch = useDispatch();
    
    const handleClearAllCompletedTodos = () => {
        dispatch(todoClearAllComplete());
    }

    // const handleActiveTodos = () => {
   
    // }

    // const handleCompleteTodos = () => {
     
    // }

    return (
        <div className="todo-bar">
            <div className="flex-child">
                <p>5 items left</p>
            </div>
            {/* <div className="flex-row flex-child">
                <p>All</p>
                <p onClick={handleActiveTodos}>Active</p>
                <p onClick={handleCompleteTodos}>Completed</p>
            </div> */}
            <div 
                className="flex-child todo-clear"
                onClick={handleClearAllCompletedTodos}>
                <p>Clear completed</p>
            </div>
        </div>
    )
}
