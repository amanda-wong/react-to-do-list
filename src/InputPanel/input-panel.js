import React, { Component } from 'react';
import './input-panel.css';

class InputPanel extends Component {

    constructor() {
        super();

        this.state = {
            heading: '',
            description: '',
            priority: 'high'
        };

        this.baseState = this.state;
    }

    handleSubmit = () => {
        if(this.state.heading !== '' && this.state.description !== '') {
            this.props.submitHandler({...this.state});  //set whole state over to app
            this.resetFields();
        }
    }

    handleHeadingChange = (e) => {
        this.setState({
            heading: e.target.value
        });
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handlePrioritySelection = (e) => {
        if(e.target.value !== this.state.priority) {  // to prevent rerender if same selection
            this.setState({
                priority: e.target.value
            });
        }
    }

    resetFields = () => {
        this.setState(this.baseState); 
    }
    
    render() {
        
        return (
            <div id="InputPanel">
                <input type="text" 
                    className="task-heading" 
                    onChange={this.handleHeadingChange}
                    value={this.state.heading} />
                <input 
                    type="text" 
                    className="task-description" 
                    onChange={this.handleDescriptionChange} 
                    value={this.state.description}/>
                <select 
                    className="priority-rank" 
                    onChange={this.handlePrioritySelection}
                    value={this.state.priority}>
                    <option value="high">High Priority</option>
                    <option value="low">Low Priority</option>
                </select>
                <input type="submit" onClick={this.handleSubmit} />
                <button className="clear" onClick={this.resetFields}>Clear</button>
            </div>
        )
    }
}

export default InputPanel;