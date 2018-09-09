import React, { Component } from 'react';
import './input-panel.css';

class InputPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heading: '',
            description: '',
            priority: 'high'
        };
    }

    handleSubmit = () => {
        if(this.state.heading !== '' && this.state.description !== '') {
            this.props.submitHandler({...this.state});
            
            this.setState({
                heading: '',
                description: '',
                priority: 'high'
            })
        }
    }

    handleHeadingChange = (event) => {
        this.setState({
            heading: event.target.value
        });
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    handlePrioritySelection = (event) => {
        if(event.target.value !== this.state.priority) {  // to prevent rerender if same selection
            this.setState({
                priority: event.target.value
            });
        }
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
                <input type="submit" onClick={this.handleSubmit} />
            </div>
        )
    }
}

export default InputPanel;