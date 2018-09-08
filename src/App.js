import React, { Component } from 'react';
import InputPanel from './InputPanel/input-panel';
import ToDoList from './ToDoList/to-do-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <InputPanel />
        <ToDoList />
      </div>
    );
  }
}

export default App;
