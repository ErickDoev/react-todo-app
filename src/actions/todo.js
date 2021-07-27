import { types } from "../types/types";


export const todoAddNew = (todo) => ({
    type:types.todoAdd,
    payload:{
        id: new Date().getTime(),
        todo
    }
});

export const todoSetActive = (todo) => ({
    type:types.todoActive,
    payload:todo
});

export const todoRemoveActive = () => ({
    type:types.todoRemoveActive
});

export const todoComplete = (todo) => ({
    type:types.todoComplete,
    payload:todo
});

export const todoDelete = (id) => ({
    type:types.todoDelete,
    payload:id
});

export const todoCompleteDelete = (id) => ({
    type:types.todoCompleteDeleted,
    payload:id
});

export const todoClearAllComplete = () => ({
    type:types.todoAllCompleteDelete
});

