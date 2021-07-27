import React from 'react'
import { useSelector } from 'react-redux';

import { Bar } from './Bar';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

    
    const {todos} = useSelector(state => state.todos);

    return (
        <>
            <div className="todo-list">
                {todos.map(todo => <TodoItem key={todo.id} id={todo.id} todo={todo.todo}/>)}   
            </div>
        {/* <Bar /> */}
        </>
        
    )
}
