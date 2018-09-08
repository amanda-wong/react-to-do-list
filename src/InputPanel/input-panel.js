import React, { Component } from 'react';
import './input-panel.css';

class InputPanel extends Component {
    render() {
        return (
            <div id="InputPanel">
                <input type="text" className="task-heading" />
                <input type="text" className="task-description" />
                <select className="priority-rank">
                    <option value="high priority">High Priority</option>
                    <option value="low priority">Low Priority</option>
                    <input type="submit" />
                </select>
            </div>
        )
    }
}

export default InputPanel;