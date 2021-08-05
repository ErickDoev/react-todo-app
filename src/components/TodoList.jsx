import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoRenderActive, todoRenderAll, todoRenderComplete } from '../actions/todo';


import { TodoItem } from './TodoItem';

export const TodoList = () => {

    
    const {renderTodos,userAction,todos} = useSelector(state => state.todos);

    const dispatch = useDispatch();
    useEffect(() => {
        if(userAction === "all"){
            return dispatch(todoRenderAll());
        }
        if(userAction === "actives"){
            return dispatch(todoRenderActive());
        }
        if(userAction === "completed"){
            return dispatch(todoRenderComplete())
        }
        
    }, [userAction,todos,dispatch])

    return (

        <div className="todo-list">
            {renderTodos.map(todo =>
                <TodoItem
                        key={todo.id} 
                        id={todo.id} 
                        todo={todo.todo}
                        isCompleted={todo.isCompleted}
                    />
            )}
        </div>         
    )
}
