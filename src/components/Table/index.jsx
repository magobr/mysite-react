import React from 'react';

import './style.css';
export default class Table extends React.Component {
    
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
