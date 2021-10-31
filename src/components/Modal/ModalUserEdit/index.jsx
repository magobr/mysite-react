import React, { useState, useEffect } from 'react';

import FormInput from '../../form/Input';
import FormSelect from '../../form/Select';
import FormButton from '../../form/Button';

import api from '../../../services/api';

import './style.css';

function ModalUserEdit(props) {

    const {userEditId, closeModal } = props;
    const [valueInput, setValue] = useState({});
    const [userEditData, setUserEditData] = useState({});
    const [errFristName, setErrFristName] = useState({class: '', message: ''});
    const [errLastName, setErrLastName] = useState({class: '', message: ''});
    const [emailError, setEmailError] = useState({class: '', message: ''});
    const [passError, setPassError] = useState({class: '', message: ''});
    const [userTypeError, setUserTypeError] = useState({class: '', message: ''});

    useEffect(()=>{
        const userData = async () => {
            const headers = {
                headers: {
                'Content-Type': 'application/json'
                }
            }
            try {
                const { data } = await api.get(`user/${userEditId}`, {}, headers)
                setUserEditData(data)
            } catch (e){
                return e
            }
        }
        userData();
    },[userEditId])

    const postForm = async (dataForm, id) => {
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const { data } = await api.put(`user/${id}`, dataForm, headers);
            return data;
        } catch (e) {
            return e;
        }
    }

    const handleChange = (event) =>{
        const auxValues = {...valueInput}
        auxValues[event.target.name] = event.target.value;
        setValue(auxValues);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const dados = { 
            frist_name: (!valueInput.frist_name ? userEditData.frist_name : valueInput.frist_name),
            last_name: (!valueInput.last_name ? userEditData.last_name : valueInput.last_name),
            email: (!valueInput.email ? userEditData.email : valueInput.email),
            password: valueInput.password, 
            user_type: (!valueInput.user_type ? userEditData.user_type : valueInput.user_type),
            user_status: "ACTIVE"
        }

        let retorno = true

        if(!valueInput.frist_name){
            setErrFristName({class: "inputWarning", message: "Campo Nome não modificado, o valor atual não mudará"})  
        }

        if(!valueInput.last_name){
            setErrLastName({class: "inputWarning", message: "Preencha com o Último Nome"})                 
        }

        if(!valueInput.email){
            setEmailError({class: "inputWarning", message: "Preencha com um E-Mail"})
        }

        if(!valueInput.password){
            setPassError({class: "inputErr", message: "Preencha com uma Senha"})
            retorno = false           
        }
        if(!valueInput.user_type){
            setUserTypeError({class: "inputWarning", message: "Preencha com uma Senha"})       
        }

        if (retorno) {
            const response = await postForm(dados,userEditData._id);
            console.log(response);
            console.log(closeModal())
            return retorno
        }
            
    }

    let userType = {
        Escritor: "WRITER",
        Admin: "ADMIN",
        Leitor: "READER"
    }
    userType = JSON.stringify(userType);

    return(
        <>
        {!userEditData ? <>Loading</> :
            <form onSubmit={handleSubmit}>
                <FormInput
                id="frist_name"
                nameItem="frist_name"
                label="Primeiro Nome"
                type="text"
                placeholder="Digite seu nome"
                nameTarget={handleChange}
                defaultValue={userEditData.frist_name}
                classErr={errFristName.class}
                errMessage={errFristName.message}
                />
                <FormInput
                    id="last_name"
                    nameItem="last_name"
                    label="Último Nome"
                    type="text"
                    placeholder="Digite seu Sobrenome"
                    nameTarget={handleChange}
                    defaultValue={userEditData.last_name}
                    classErr={errLastName.class}
                    errMessage={errLastName.message}
                />
                <FormInput
                    id="email"
                    nameItem="email"
                    label="E-mail"
                    type="email"
                    placeholder="Digite seu E-mail"
                    nameTarget={handleChange}
                    valueInput={handleChange}
                    defaultValue={userEditData.email}
                    classErr={emailError.class}
                    errMessage={emailError.message}
                />
                <FormInput
                    id="password"
                    nameItem="password"
                    label="Senha"
                    type="password"
                    placeholder="Digite sua Senha"
                    nameTarget={handleChange}
                    classErr={passError.class}
                    errMessage={passError.message}
                />
                <FormSelect 
                    id="user_type"
                    nameItem="user_type"
                    label="Tipo de Usuário"
                    nameSelecione="Um Tipo"
                    userType={userType}
                    defaultValue={userEditData.userType}
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
            }
        </>
        
    )
        
}
export default ModalUserEdit;