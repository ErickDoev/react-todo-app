import { types } from "../types/types";

const initialState = {
    todos:[],
    // completedTodos:[],
    // activeTodos:[],
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

        // case types.todoComplete:
        //     return{
        //         ...state,
        //         completedTodos:[...state.todos,action.payload]
        //     }
        
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

        // case types.todoCompleteDeleted:
        //     return{
        //         ...state,
        //         completedTodos:state.completedTodos.filter(todo => todo.id !== action.payload)
        //     }

        // case types.todoAllCompleteDelete:
        //     return{
        //         ...state,
        //         completedTodos:[]
        //     }
            
    
        default:
            return state;
    }
}
