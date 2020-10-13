import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import Content from './component/Content'
import Add from './component/Add';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div className="row">
          <Content />
          <Add />
        </div>
      </div>
    </div>
  );
}

export default App;
