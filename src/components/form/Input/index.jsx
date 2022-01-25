import React, { useState } from 'react';
import './style.css';

function FormInput(props){
    let [valueInput, setValueInput] = useState('');
    
    const inputUpdated = (e) =>{
        const { value } = e.target;
        valueInput = value
    }

    return(
        <div className={"input-item " +  props.classErr}>
            <div className="input-item_label">
                <label htmlFor={props.id}>{props.label}</label>
                <div>
                    <small>
                        {props.errMessage}
                    </small>
                </div>
            </div>
            <input 
                type={props.type}
                id={props.id}
                name={props.nameItem}
                defaultValue={props.defaultValue || (() => setValueInput(valueInput)) }
                onInput={inputUpdated}
                placeholder={props.placeholder}
                onChange={props.nameTarget}
            />
        </div>
    )
}
    
export default FormInput;