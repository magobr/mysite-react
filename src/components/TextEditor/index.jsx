import React from 'react';

import * as ReactQuill from "react-quill";

import './style.css';
import 'quill/dist/quill.snow.css'; 

export default class TextEditor extends React.Component {

    constructor(props) {
        super(props)
        this.state = { text: '' }
    }
    
    handleChange = (value) => {
        this.setState({ text: value })
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            ['link'],
            ['clean'] 
        ],
    }
    
    render(){
        return (
            <>
                <div>
                    <small>
                        {this.props.errMessage}
                    </small>
                </div>
                <ReactQuill
                    value={this.props.text}
                    onChange={this.props.nameTarget}
                    modules={this.modules}
                />
            </>
        );
    }
}
