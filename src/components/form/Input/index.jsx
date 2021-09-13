import React from 'react';

import './style.css';
export default class FormInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            valueInput: ''
        }
        // this.inputUpdated = this.inputUpdated.bind(this);
    }

    inputUpdated = (e) =>{
        const { value } = e.target;
        this.setState({ valueInput: value})
    }

    render(){
        return(
            <div className="input-item">
                <div className="input-item_label">
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                </div>
                <input 
                    type="text"
                    id={this.props.id}
                    name={this.props.nameItem}
                    value={this.state.valueInput}
                    onInput={(e) => this.inputUpdated(e)}
                />
            </div>
        )
    }
    
}
