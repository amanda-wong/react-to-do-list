import React, { Component } from 'react';
import InputPanel from './InputPanel/input-panel';
import ToDoList from './ToDoList/to-do-list';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            toDoList: []
        }
    }

    submitToDoHandler = (state) => {
        this.setState({
            toDoList: this.state.toDoList.concat(state) // how to add objects into an array
        });
    }
    
    render() {
        
        return (
            <div id="App">
                <InputPanel 
                    headingChange={this.headingChangeHandler}
                    descriptionChange={this.descriptionChangeHandler} 
                    priorityChange={this.priorityHandler}
                    submitHandler={this.submitToDoHandler} 
                    />
                    
                <ToDoList toDoList={this.state.toDoList} />
            </div>
        );
    }
}

export default App;
