import React, { useState } from 'react'

const initialState = {
    todo:''
}
export const TodoInput = () => {

    const [inputValues, setInputValues] = useState(initialState);
    const {todo} = inputValues;

    const handleInputChange = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]:target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Create a new todo..."
                name="todo"
                value={todo}
                className="todo-input"
                autoComplete="off"
                onChange={handleInputChange}/>
          </form>
        </div>
    )
}
