import React, { Component } from 'react';
import './to-do-item.css';

class ToDoItem extends Component {

    handleCheckmarkChange = () => {
        
    }

    render() {
        return (
            <div className={this.props.className + " item"}>
                <input type="checkbox" onChange={this.handleCheckmarkChange}/>
                <div className="item-content">
                    <h3 className="item-title">{this.props.heading}</h3>
                    <p className="item-description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default ToDoItem;