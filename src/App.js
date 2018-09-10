import React, { Component } from 'react';
import InputPanel from './InputPanel/input-panel';
import ToDoList from './ToDoList/to-do-list';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            toDoList: [],
            showPanel: false
        }
    }

    submitToDoHandler = (state) => {
        let sortedItems = this.state.toDoList.sort((a,b) => a.priority > b.priority).concat(state)
        this.setState({
            toDoList: sortedItems // how to add objects into an array
        });
    }

    addToDoClick = () => {
        this.setState({showPanel:true})
    }

    closeModalHandler = () => {
        this.setState({showPanel:false})
    }
     
    render() {
        return (
            <div className="app">
                <div 
                    className="add-to-do-button"
                    onClick={this.addToDoClick}>+</div>
                {this.state.showPanel
                    ? <InputPanel 
                        headingChange={this.headingChangeHandler}
                        descriptionChange={this.descriptionChangeHandler} 
                        priorityChange={this.priorityHandler}
                        submitHandler={this.submitToDoHandler} 
                        closeModal={this.closeModalHandler}
                        />
                    : null}    
                <ToDoList toDoList={this.state.toDoList} />
            </div>
        );
    }
}

export default App;
