import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/Search';
import { Card } from 'antd';
import User from './components/Card';
import Cards from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        <h1>RoboUsers</h1>
      </header>
      <div className="container">
        <SearchBox/>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
