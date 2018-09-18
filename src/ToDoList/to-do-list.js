import React, { Component } from 'react';
import Item from '../Item/item';
import './to-do-list.css';

class ToDoList extends Component {

    itemChangeHandler = (id) => {
        this.props.itemChange(id);
    }

    render() {
        let handler = this.itemChangeHandler.bind(this); // must bind this because below's map item is "this"

        let toDoItems = this.props.toDoList.filter(item => !item.completed).map(item => 
                <Item
                    showCheckbox={true}
                    key={item.id} 
                    id={item.id} 
                    heading={item.heading} 
                    description={item.description} 
                    className={item.priority === 'high' ? 'high' : null}
                    itemChange={handler}
                />);

        return(
            <div className="to-do-list">
                <h1>To Do List</h1>
                <div className="to-do-list-container">
                    {toDoItems}
                </div>
            </div>
        )
    }
}

export default ToDoList;