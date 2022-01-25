import './style.css';

function FormButton(props){
    return(
        <div className="input-item">
            <button 
                className={`input-btn ${props.classes}`}
                id={props.id}
                name={props.name}
                onClick={props.onClick}
            >
                {props.labelName}
            </button>
        </div>
    )
}

export default FormButton;