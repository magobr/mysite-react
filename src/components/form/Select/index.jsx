import React from 'react';

import './style.css';

function FormSelect(props){
    const propVal = JSON.parse(props.listOption);
    return(
        <div className={"input-item " + props.classErr}>
            <div className="input-item_label">
                <label htmlFor={props.id}>{props.label}</label>
                <div>
                    <small>
                        {props.errMessage}
                    </small>
                </div>
            </div>
            <select 
                type={props.type}
                id={props.id}
                name={props.nameItem}
                onChange={props.nameTarget}
            >
                <option value={undefined}>Selecione {props.nameSelecione}</option>
                {Object.entries(propVal).map((val)=>{
                    return(
                        <option
                            key={val[0]}
                            value={val[1]}
                        >
                           {val[1]}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default FormSelect;