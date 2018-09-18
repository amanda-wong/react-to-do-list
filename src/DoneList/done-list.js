import React, { Component } from 'react';
import './done-list.css';
import Item from './../Item/item';

class DoneList extends Component {
    render() {

        let doneListItem = this.props.toDoList.filter(item => item.completed).map(item => (
         <Item 
            showCheckbox={false}
            key={item.id} 
            heading={item.heading} 
            description={item.description}
            className={item.priority === 'high' ? 'high done' : null + 'done'}
        />   
        )) 
        return(
            <div className="done-list">
                <h1>Done</h1>
                <div className="done-list-container">
                    {doneListItem}
                </div>
            </div>
        )
    }
}

export default DoneList;