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
            password: '',
            inputEmailError: '',
            errEmailMessage: '',
            inputPassError: '',
            errPassMessage: ''
        }
    }

    postLogin = async (dataForm) =>{
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

    handleSubmit = async (event)=>{
        event.preventDefault();

        const dados = {
            email: this.state.email,
            password: this.state.password
        }
        const response = await this.postLogin(dados);

        console.log(response)

        if(response.status === 400){

            if(response.err.code === 1){
                this.setState({
                    inputEmailError: "inputErr",
                    errEmailMessage: response.err.message,
                })
            }
            
            if(response.err.code === 3){
                this.setState({
                    inputPassError: "inputErr",
                    errPassMessage: response.err.message,
                })
            }
        }

        if(response.error){

            if(response.code === 2){
                this.setState({
                    inputEmailError: "inputErr",
                    errEmailMessage: response.message
                })
            }

        }

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
                            classErr={this.state.inputEmailError}
                            errMessage={this.state.errEmailMessage}
                        />
                        <FormInput
                            id="password"
                            nameItem="password"
                            label="Senha"
                            type="password"
                            placeholder="Digite sua Senha"
                            nameTarget={(e) => this.handleChange (e)}
                            classErr={this.state.inputPassError}
                            errMessage={this.state.errPassMessage}
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