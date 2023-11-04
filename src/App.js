import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import './App.css'
import './index.css'
import TodoList from './components/TodoList'

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <TodoList />
            </div>
        </Provider>
    )
}

export default App
