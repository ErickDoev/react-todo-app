import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoComplete, todoSetActive, todoDelete,todoRemoveActive} from '../actions/todo'

export const TodoItem = ({todo,id}) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.todos);

   const handleSetCompleted = () => {
        dispatch(todoComplete({id,todo}));
        setIsSelected(true);
        //dispatch(todoDelete(id));
    }

    const handleSetActive = () => {
        dispatch(todoSetActive({id,todo}));
        
    }

    const handleDelete = () => {
        dispatch(todoDelete(id));
        dispatch(todoRemoveActive());
        //dispatch(todoCompleteDelete(id));
    }

    useEffect(() => {
        if(active?.id === id){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }, [active?.id,id]);

    return (
        <div 
            className="todo-item"
            >
                <div className="flex-row">
                    <button
                        className={isSelected? "todo-circle-active": "todo-circle"}
                        disabled={isSelected? true : false}
                        onClick={handleSetCompleted}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                    </button>
                    <div
                        className="todo-text"
                        onClick={handleSetActive}>
                        <p 
                            className={isSelected ? "underlined" : ""}>
                            {todo}
                        </p>
                    </div>
                </div>
                <div
                    className={isActive ? "todo-cross-active" : "todo-cross"}
                    onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                    </div>
        </div>
    )
}
