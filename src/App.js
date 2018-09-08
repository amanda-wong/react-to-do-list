import React, { Component } from 'react';
import InputPanel from './InputPanel/input-panel';
import ToDoList from './ToDoList/to-do-list';
import ToDoItem from './ToDoItem/to-do-item';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            heading: '',
            description: '',
            submitToDoItem: false
        }
    }


    headingChangeHandler = (event) => {
        this.setState({
            heading: event.target.value
        })
    }

    descriptionChangeHandler = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    submitToDoHandler = () => {
        this.setState({
            submitToDoItem: true 
        })
    }

    render() {
        return (
            <div id="App">
                <InputPanel 
                    submitHandler={this.submitToDoHandler} 
                    headingChange={this.headingChangeHandler}
                    descriptionChange={this.descriptionChangeHandler} />
                <ToDoList 
                    description={this.state.description}
                    heading={this.state.heading}
                    createToDo={this.state.createToDo} />
            </div>
        );
    }
}

export default App;
