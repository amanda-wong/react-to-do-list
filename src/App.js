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
        let sortedDate = this.state.toDoList.sort((a,b) => a.priority && a.heading > b.priority && b.heading).concat(state)
        this.setState({
            toDoList: sortedDate // how to add objects into an array
        });
    }
    
    render() {
        
        console.log("Sorted: " + this.state.toDoList.sort((a,b) => a.priority > b.priority));
        

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
