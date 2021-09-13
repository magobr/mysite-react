import React from 'react';

import './style.css';
export default class FormButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            valueInput: ''
        }
        // this.inputUpdated = this.inputUpdated.bind(this);
    }

    render(){
        return(
            <div className="input-item">
               <button 
                    className={`input-btn ${this.props.classes}`}
                    id={this.props.id}
                    name={this.props.name}
                >
                    {this.props.labelName}
                </button>
            </div>
        )
    }
    
}
