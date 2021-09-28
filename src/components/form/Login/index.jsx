import FormButton from "../Button";
import FormInput from "../Input";
import React from "react";

import api from "../../../services/api";
import { login } from "../../../services/auth";

import "./style.css";

export default class FromLogin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    postLogin = async (dataForm) =>{
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await api.post('login', dataForm, headers);
        return data;
    }

    handleSubmit = async (event)=>{
        event.preventDefault();

        const dados = {
            email: this.state.email,
            password: this.state.password
        }
        const response = await this.postLogin(dados);
        login(response.token);
    }

    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return(
            <div className="container">
                <div className="form">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <FormInput
                            id="email"
                            nameItem="email"
                            label="E-mail"
                            type="email"
                            placeholder="Digite seu E-mail"
                            nameTarget={(e) => this.handleChange (e)}
                        />
                        <FormInput
                             id="password"
                             nameItem="password"
                             label="Senha"
                             type="password"
                             placeholder="Digite sua Senha"
                             nameTarget={(e) => this.handleChange (e)}
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
}