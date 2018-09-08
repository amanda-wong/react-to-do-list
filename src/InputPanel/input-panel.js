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
                <select className="priority-rank">
                    <option value="high priority">High Priority</option>
                    <option value="low priority">Low Priority</option>
                </select>
                <input type="submit" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default InputPanel;