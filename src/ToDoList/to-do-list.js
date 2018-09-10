import React, { Component } from 'react';
import ToDoItem from './../ToDoItem/to-do-item';
import './to-do-list.css';

class ToDoList extends Component {
    render() {
    
        let toDoItems = this.props.toDoList.map(function(item, i){   // remove object from list
            if(!item.done) {
                return (
                    <ToDoItem 
                        key={i} 
                        heading={item.heading} 
                        description={item.description} 
                        className={item.priority === 'high' ? 'high' : null}
                    />)
            }
        });

        console.log(this.props.toDoList);
        

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