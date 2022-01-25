import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import FormButton from "../Button";
import FormInput from "../Input";

import api from "../../../services/api";
import { login, isAuthenticated } from "../../../services/auth";

import "./style.css";

function FromLogin(){
    const history = useHistory();
    const [valueInput, setValue] = useState({});
    const [inputErrorEmail, setInputErrorEmail] = useState({class: '', message: ''});
    const [inputErrorPass, setInputErrorPass] = useState({class: '', message: ''});

    useEffect(()=>{
        if (isAuthenticated()) {
            history.push("/admin/user")
        }
    },[history])

    const postLogin = async (dataForm) =>{
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const { data } = await api.post('login', dataForm, headers);
            return data;
        } catch (e) {
            let res = {
                status: e.response.status,
                err: e.response.data
            }
            return res;
        }
    }
    
    const handleChange = (event) =>{
        const auxValues = {...valueInput}
        auxValues[event.target.name] = event.target.value;
        setValue(auxValues);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await postLogin(valueInput);


        if(response.status === 400){
            if(response.err.code === 1){
                setInputErrorEmail({class: "inputErr", message: response.err.message});
            }
            
            if(response.err.code === 3){
                setInputErrorPass({class: "inputErr", message: response.err.message})
            }
        }

        if(response.error){
            if(response.code === 2){
                setInputErrorEmail({class: "inputErr", message: response.err.message});
            }
        }

        if (response.token) {
            login(response.token);
            history.push("/admin/user");
        }
    }

    return(
        
        <div className="container">

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <FormInput
                        id="email"
                        nameItem="email"
                        label="E-mail"
                        type="email"
                        placeholder="Digite seu E-mail"
                        defaultValue={valueInput.email}
                        nameTarget={handleChange}
                        classErr={inputErrorEmail.class}
                        errMessage={inputErrorEmail.message}
                    />
                    <FormInput
                        id="password"
                        nameItem="password"
                        label="Senha"
                        type="password"
                        placeholder="Digite sua Senha"
                        defaultValue={valueInput.password}
                        nameTarget={handleChange}
                        classErr={inputErrorPass.class}
                        errMessage={inputErrorPass.message}
                    />
                    <FormButton
                        classes="btn-blue"
                        name="btn-login"
                        id="btn-login"
                        labelName="Entrar"
                    />
                </form>
            </div>
        </div>            
    );
}
export default FromLogin;