import React, { Component } from 'react';
import './to-do-item.css';

class ToDoItem extends Component {
    render() {
        return (
            <div className={this.props.className + " Item"}>
                <input type="checkbox" />
                <div className="Item-content">
                    <h3 className="Item-title">{this.props.heading}</h3>
                    <p className="Item-description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default ToDoItem;