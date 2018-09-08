import React, { Component } from 'react';
import './to-do-list.css';

class ToDoList extends Component {
    render() {
        return(
            <div id="ToDoList">
                <h1>To Do List</h1>
                <div className="to-do-list-container"></div>
            </div>
        )
    }
}

export default ToDoList;