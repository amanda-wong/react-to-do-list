import React, { Component } from 'react';
import './input-panel.css';

class InputPanel extends Component {

    constructor() {
        super();

        this.state = {
            heading: '',
            description: '',
            priority: 'high',
            id: ''
        };

        this.baseState = this.state;
    }

    createId = () => Math.random().toString(36).substr(2,9);

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

    handleCloseModalClick = (e) => {
        if(e.target.contains(document.querySelector('.input-panel'))){
            this.props.closeModal();
        } 
    }

    resetFields = () => {
        this.setState(this.baseState); 
    }
    
    render() {

        return (
            <div className="modal" onClick={this.handleCloseModalClick}>
                <div className="input-panel">

                    <h2>Add Item</h2>
                    <input type="text" 
                        className="task" 
                        onChange={this.handleHeadingChange}
                        value={this.state.heading} 
                        placeholder="Title"/>
                    <input 
                        type="text" 
                        className="task" 
                        onChange={this.handleDescriptionChange} 
                        value={this.state.description}
                        placeholder="Description"/>
                    <select 
                        className="priority-rank" 
                        onChange={this.handlePrioritySelection}
                        value={this.state.priority}>
                        <option value="high">High Priority</option>
                        <option value="low">Low Priority</option>
                    </select>
                    <div className="button-container">
                        <input className="submit" type="submit" onClick={this.handleSubmit} />
                        <button className="clear" onClick={this.resetFields}>Clear</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputPanel;