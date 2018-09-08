import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        return (
            <div className="Item">
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