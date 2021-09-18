import React from 'react';

import './style.css';
export default class FormSelect extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            valueInput: ''
        }
        // this.inputUpdated = this.inputUpdated.bind(this);
    }

    inputUpdated = (e) =>{
        const { value } = e.target.value;
        this.setState({ valueInput: value})
    }

    render(){
        const propVal = this.props.userType;
        return(
            <div className="input-item">
                <div className="input-item_label">
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                </div>
                <select 
                    type={this.props.type}
                    id={this.props.id}
                    name={this.props.nameItem}
                    onChange={(e) => this.inputUpdated(e)}
                >
                    <option>Selecione um Perfil</option>
                    {propVal.map((val)=>{
                        return(
                            <option key={val} value={val}>{val}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
    
}
