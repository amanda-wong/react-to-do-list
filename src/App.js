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
            showPanel: false,
            doneList: []
        }
    }

    moveItemToDone = (id) => {
        let toDoList = this.state.toDoList.map(function(item) {
            if(item.id !== id) {
                return item;
            }
        })
        let doneList = this.state.toDoList.find(item => (item.id === id) ? item : null)

        this.setState({
            toDoList: toDoList,
            doneList: this.state.doneList.concat(doneList)
        })
    }

    submitToDoHandler = (state) => {
        let sortedItems = this.state.toDoList.concat(state).sort((a,b) => a.priority > b.priority)
        this.setState({toDoList: sortedItems});
    }

    addToDoClick = () => this.setState({showPanel:true});

    closeModalHandler = () => this.setState({showPanel: false});

    render() {

        console.log("todo list: ", this.state.toDoList);
        console.log("done list: ", this.state.doneList);
        console.log("todo id: ", this.state.toDoList.id);
        console.log("done id: ", this.state.doneList.id);

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
                <ToDoList
                    toDoList={this.state.toDoList}
                    checkmarkChange={this.moveItemToDone}
                />
                <DoneList />
            </div>
        );
    }
}

export default App;
