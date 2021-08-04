import { types } from "../types/types";

const initialState = {
    todos:[],
    renderTodos:[],
    userAction:'all',
    active:null
}

export const todoReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.todoAdd:
            return {
                ...state,
                todos:[...state.todos,action.payload]
            };

        case types.todoActive:
            return {
                ...state,
                active:action.payload
            }
        case types.todoDelete:
            return{
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload ) 
            }

        case types.todoRemoveActive:
            return{
                ...state,
                active:null
            }
        
        case types.todoComplete:
            return{
                ...state,
                todos:state.todos.map(
                    todo => todo.id === action.payload.id
                    ?{...todo,isCompleted:true}
                    :todo)
            }

        case types.todoRenderAll:
            return{
                ...state,
                renderTodos:[...state.todos]
            }

        case types.todoRenderActive:
            return{
                ...state,
                renderTodos:state.todos.filter(todo => todo.isCompleted === false)
            }

        case types.todoRenderComplete:
            return{
                ...state,
                renderTodos:state.todos.filter(todo => todo.isCompleted === true)
            }

        case types.todoUserActive:
            return{
                ...state,
                userAction:'actives'
            }

        case types.todoUserAll:
            return{
                ...state,
                userAction:'all'
            }

        case types.todoUserComplete:
            return{
                ...state,
                userAction:'completed'
            }

        case types.todoAllCompleteDelete:
            return{
                ...state,
                todos:state.todos.filter(todo => todo.isCompleted === false)
            }
    
        default:
            return state;
    }
}
