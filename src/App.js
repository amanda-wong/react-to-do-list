import React, { Component } from 'react';
import InputPanel from './InputPanel/input-panel';
import ToDoList from './ToDoList/to-do-list';
import DoneList from './DoneList/done-list';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            toDoList: [],
            showPanel: false
        }
    }
    
    itemCompletedHandler = (id) => {
        let toDoList = this.state.toDoList;
        let itemCompleted = toDoList.find(function(item){
            return item.id === id
        });

        itemCompleted.completed = true;

        this.setState({toDoList})
    }

    addToDoClick = () => {
        this.setState({showPanel:true});
    }

    closeModalHandler = () => {
        this.setState({showPanel:false});
    }

    submitToDoHandler = (state) => {
        let sortedItems = this.state.toDoList.concat(state).sort((a,b) => a.priority > b.priority)
        this.setState({toDoList: sortedItems});
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
                        closeModal={this.closeModalHandler} /> 
                    : null}    
                <ToDoList 
                    toDoList={this.state.toDoList} 
                    itemChange={this.itemCompletedHandler} />
                <DoneList toDoList={this.state.toDoList} />

            </div>
        );
    }
}

export default App;
