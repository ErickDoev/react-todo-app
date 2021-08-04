import { types } from "../types/types";


export const todoAddNew = (todo) => ({
    type:types.todoAdd,
    payload:{
        id: new Date().getTime(),
        todo,
        isCompleted:false
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

export const todoRenderAll = () => ({
    type:types.todoRenderAll
});

export const todoRenderActive = () => ({
    type:types.todoRenderActive
});

export const todoRenderComplete = () => ({
    type:types.todoRenderComplete
});

export const todoUserActionAll = () => ({
    type:types.todoUserAll
});

export const todoUserActionActive = () => ({
    type:types.todoUserActive
});

export const todoUserActionComplete = () => ({
    type:types.todoUserComplete
});