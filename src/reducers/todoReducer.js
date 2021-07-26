import { types } from "../types/types";

const initialState = {
    allTodos:null,
    activeTodos:null,
    completedTodos:null,
    active:null
}

export const todoReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.todoAdd:
            return state;
            
    
        default:
            return state;
    }
}
