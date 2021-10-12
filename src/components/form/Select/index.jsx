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

    render(){
        const propVal = JSON.parse(this.props.userType);
        return(
            <div className={"input-item " + this.props.classErr}>
                <div className="input-item_label">
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    <div>
                        <small>
                            {this.props.errMessage}
                        </small>
                    </div>
                </div>
                <select 
                    type={this.props.type}
                    id={this.props.id}
                    name={this.props.nameItem}
                    onChange={this.props.nameTarget}
                >
                    <option value="">Selecione {this.props.nameSelecione}</option>
                    {Object.entries(propVal).map((val)=>{
                        return(
                            <option key={val[0]} value={val[1]}>{val[1]}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
    
}
