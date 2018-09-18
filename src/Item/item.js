import React, { Component } from 'react';
import './item.css';

class ToDoItem extends Component {

    handleCheckmarkChange = () => {
        this.props.itemChange(this.props.id);
    }

    render() {
        return (
            <div className={this.props.className + " item"}>
                {this.props.showCheckbox ? 
                    <input type="checkbox" onChange={this.handleCheckmarkChange}/>
                : null}
                <div className="item-content">
                    <h3 className="item-title">{this.props.heading}</h3>
                    <p className="item-description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default ToDoItem;