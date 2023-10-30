import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Workspace from './components/Workspace';
import './App.css';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <Workspace />
      </div>
    </Provider>
  );
}

export default App;
