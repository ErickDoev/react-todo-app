import React from 'react'
import { TodoScreen } from './components/TodoScreen'
import { Provider } from "react-redux";
import { store } from './store/store';
export const TodoApp = () => {
    return (
        <Provider store={store}>
            <TodoScreen/>
        </Provider>
    )
}
