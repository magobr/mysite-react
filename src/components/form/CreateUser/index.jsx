import React from "react";

import FormButton from "../Button";
import FormInput from "../Input";
import FormSelect from "../Select";

import "./style.css";

const mockUserType = [
    "WRITER",
    "ADMIN",
    "READER"
]

export default class CreateUser extends React.Component{
    render(){
        console.log(mockUserType.Admin)
        return(
            <>
                <div className="container">
                    <div className="form">
                        <form>
                            <FormInput
                                id="frist_name"
                                name="frist_name"
                                label="Primeiro Nome"
                                type="text"
                                placeholder="Digite seu nome"
                            />
                            <FormInput
                                id="last_name"
                                name="last_name"
                                label="Último Nome"
                                type="text"
                                placeholder="Digite seu Sobrenome"
                            />
                            <FormInput
                                id="email"
                                name="email"
                                label="E-mail"
                                type="email"
                                placeholder="Digite seu E-mail"
                            />
                            <FormSelect 
                                id="user_type"
                                name="user_type"
                                label="Tipo de Usuário"
                                userType={mockUserType}
                            />
                            <FormInput
                                id="password"
                                name="password"
                                label="Senha"
                                type="password"
                                placeholder="Digite sua Senha"
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
            </>          
        );
    }
}