import React, { Component } from 'react';
import './input-panel.css';

class InputPanel extends Component {

    handleClick = () => {
        this.props.submitHandler();
    }

    handleHeadingChange = (event) => {
        this.props.headingChange(event);
    }

    handleDescriptionChange = (event) => {
        this.props.descriptionChange(event);
    }

    handlePrioritySelection = (event) => {
        this.props.priorityChange(event);
    }

    render() {
        return (
            <div id="InputPanel">
                <input type="text" 
                    className="task-heading" 
                    onChange={this.handleHeadingChange} />
                <input 
                    type="text" 
                    className="task-description" 
                    onChange={this.handleDescriptionChange} />
                <select className="priority-rank" onChange={this.handlePrioritySelection}>
                    <option value="high">High Priority</option>
                    <option value="low">Low Priority</option>
                </select>
                <input type="submit" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default InputPanel;