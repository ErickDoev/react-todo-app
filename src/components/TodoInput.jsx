import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todoAddNew } from '../actions/todo';

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

    const resetINputValues = () => {
        setInputValues(initialState);
    }

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(todoAddNew(todo));
        resetINputValues();
    }

    return (
        <div className="todo-input-content">

            <div className="todo-circle">
                
            </div>
            <form 
                className="todo-form"
                onSubmit={handleSubmit}
                >
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
