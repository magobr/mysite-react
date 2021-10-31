import React, { useState, useEffect }from "react";
import { useHistory } from "react-router";

import api from "../../../services/api";

import FormButton from "../Button";
import FormInput from "../Input";
import FormSelect from "../Select";

import "./style.css";

function CreateUser() {
    const history = useHistory();
    const [valueInput, setValue] = useState({});
    const [errFristName, setErrFristName] = useState({class: '', message: ''});
    const [errLastName, setErrLastName] = useState({class: '', message: ''});
    const [emailError, setEmailError] = useState({class: '', message: ''});
    const [passError, setPassError] = useState({class: '', message: ''});
    const [userTypeError, setUserTypeError] = useState({class: '', message: ''});
    const [listVal, setlistVal] = useState(null);

    useEffect(()=>{
        async function fetchData() {
            const headers = {
                headers: {
                'Content-Type': 'application/json'
                }
            }
            const response = await api.get('/user/get/type', {}, headers);
            setlistVal(JSON.stringify(response.data.UserType));
        }
        fetchData()
    },[])

    const postForm = async (dataForm) => {
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const { data } = await api.post('user', dataForm, headers);
            return data;
        } catch (e) {
            let res = {
                status: e.response.status,
                err: e.response.data
            }
            return res;
        }
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const dados = { 
            frist_name: valueInput.frist_name,
            last_name: valueInput.last_name,
            email: valueInput.email,
            password: valueInput.password,
            user_type: valueInput.user_type,
            user_status: "ACTIVE"
        }

        console.log(dados)
        const response = await postForm(dados);
        console.log(response);

        let retorno = true

        if(response.err){

            if(!dados.frist_name){
                setErrFristName({class: "inputErr", message: "Preencha com o Primeiro Nome"})  
                retorno = false
            }

            if(!dados.last_name){
                setErrLastName({class: "inputErr", message: "Preencha com o Último Nome"})  
                retorno = false               
            }

            if(!dados.email){
                setEmailError({class: "inputErr", message: "Preencha com um E-Mail"})
                retorno = false
            }

            if(!dados.password){
                setPassError({class: "inputErr", message: "Preencha com uma Senha"})
                retorno = false           
            }

            if(!dados.user_type){
                setUserTypeError({class: "inputErr", message: "Preencha com uma Senha"})
                retorno = false         
            }
        }
        
        if (!retorno && response.error === false) {
            history.push("/admin/user");
        }
       
    }   

    const handleChange = (event) =>{
        const auxValues = {...valueInput}
        auxValues[event.target.name] = event.target.value;
        setValue(auxValues);
    }
    
    return(
        <>
        {!listVal ? <>Loading</>:
            <div className="container">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            id="frist_name"
                            nameItem="frist_name"
                            label="Primeiro Nome"
                            type="text"
                            placeholder="Digite seu nome"
                            defaultValue={valueInput.frist_name}
                            nameTarget={handleChange}
                            classErr={errFristName.class}
                            errMessage={errFristName.message}
                        />
                        <FormInput
                            id="last_name"
                            nameItem="last_name"
                            label="Último Nome"
                            type="text"
                            placeholder="Digite seu Sobrenome"
                            defaultValue={valueInput.last_name}
                            nameTarget={handleChange}
                            classErr={errLastName.class}
                            errMessage={errLastName.message}
                        />
                        <FormInput
                            id="email"
                            nameItem="email"
                            label="E-mail"
                            type="email"
                            placeholder="Digite seu E-mail"
                            defaultValue={valueInput.email}
                            nameTarget={handleChange}
                            classErr={emailError.class}
                            errMessage={emailError.message}
                        />
                        <FormInput
                            id="password"
                            nameItem="password"
                            label="Senha"
                            type="password"
                            placeholder="Digite sua Senha"
                            defaultValue={valueInput.password}
                            nameTarget={handleChange}
                            classErr={passError.class}
                            errMessage={passError.message}
                        />
                        <FormSelect 
                            id="user_type"
                            nameItem="user_type"
                            label="Tipo de Usuário"
                            nameSelecione="Um Tipo"
                            userType={listVal}
                            nameTarget={handleChange}
                            classErr={userTypeError.class}
                            errMessage={userTypeError.message}
                        />
                        <FormButton
                            classes="btn-green"
                            name="btn-create-user"
                            id="btn-create-user"
                            labelName="Criar Usuário"
                        />
                    </form>
                </div>
            </div>
            }
        </>          
    );
}
export default CreateUser;