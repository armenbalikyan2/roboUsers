import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import './App.css';
import Main from './Main/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <header>
        <h1>RoboUsers</h1>
      </header>
      <div className="container">
          <Main/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
