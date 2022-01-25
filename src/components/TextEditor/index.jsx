import React from 'react';

import * as ReactQuill from "react-quill";

import './style.css';
import 'quill/dist/quill.snow.css'; 

function TextEditor(props){

    let modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            ['link'],
            ['clean'] 
        ],
    };
    

    return (
        <>
            <div>
                <small>
                    {props.errMessage}
                </small>
            </div>
            <ReactQuill
                value={props.text}
                onChange={props.nameTarget}
                modules={modules}
            />
        </>
    );
}

export default TextEditor;