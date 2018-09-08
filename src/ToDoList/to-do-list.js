import React, { Component } from 'react';
import ToDoItem from './../ToDoItem/to-do-item';
import './to-do-list.css';

class ToDoList extends Component {
    render() {
        
        let ToDoItem = this.props.createToDo ? 
            <ToDoItem 
                heading={this.props.heading}
                descriptions={this.props.description} 
            /> 

            : null;
        return(


            <div id="ToDoList">
                <h1>To Do List</h1>
                <div className="to-do-list-container">
                    {ToDoItem}
                </div>
            </div>
        )
    }
}

export default ToDoList;