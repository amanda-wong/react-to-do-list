import React, { Component } from 'react';
import InputPanel from './InputPanel/input-panel';
import ToDoList from './ToDoList/to-do-list';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            heading: '',
            description: '',
            priority: 'high',
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
        });
    }

    priorityHandler = (event) => {
        this.setState({
            priority: event.target.value
        });
    }

    submitToDoHandler = () => {
        this.setState({
            submitToDoItem: true 
        });
    }

    render() {

        console.log("heading: " + this.state.heading);
        console.log("desc: " + this.state.description);
        console.log("priority: " + this.state.priority);
        
        return (
            <div id="App">
                <InputPanel 
                    headingChange={this.headingChangeHandler}
                    descriptionChange={this.descriptionChangeHandler} 
                    priorityChange={this.priorityHandler}
                    submitHandler={this.submitToDoHandler} 
                />
                    
                <ToDoList 
                    description={this.state.description}
                    heading={this.state.heading}
                    createToDo={this.state.submitToDoItem} />
            </div>
        );
    }
}

export default App;
