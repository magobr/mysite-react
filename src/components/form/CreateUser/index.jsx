import React from "react";
import { Redirect } from "react-router";

import api from "../../../services/api";

import FormButton from "../Button";
import FormInput from "../Input";
import FormSelect from "../Select";

import "./style.css";

export default class CreateUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            listVal: null,
            frist_name: '',
            last_name: '',
            email: '',
            password: '',
            user_type: '',
            user_status: '',
            inputErrFristName: '',
            errFristName: '',
            inputErrLastName: '',
            errLastName: '',
            inputEmailError: '',
            errEmailMessage: '',
            inputPassError: '',
            errPassMessage: '',
            inputUserTypeError: '',
            errUserTypeMessage: '',
            redirect: false
        }
    }

    postForm = async (dataForm) => {
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

    handleSubmit = async (event)=>{
        event.preventDefault();

        const dados = { 
            frist_name: this.state.frist_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            user_type: this.state.user_type,
            user_status: "ACTIVE"
        }
        const response = await this.postForm(dados);
        console.log(response);

        if(response.err){

            if(!dados.frist_name){
                this.setState({
                    inputErrFristName: "inputErr",
                    errFristName: 'Preencha com o Primeiro Nome'
                })    
                return false            
            }

            if(!dados.last_name){
                this.setState({
                    inputErrLastName: "inputErr",
                    errLastName: 'Preencha com o Último Nome'
                })                
            }

            if(!dados.last_name){
                this.setState({
                    inputErrLastName: "inputErr",
                    errLastName: 'Preencha com o Último Nome'
                })                
            }

            if(!dados.email){
                this.setState({
                    inputEmailError: "inputErr",
                    errEmailMessage: 'Preencha um E-Mail'
                })                
            }

            if(!dados.password){
                this.setState({
                    inputPassError: "inputErr",
                    errPassMessage: 'Preencha com uma Senha'
                })                
            }

            if(!dados.user_type){
                this.setState({
                    inputUserTypeError: "inputErr",
                    errUserTypeMessage: 'Preencha com o Último Nome'
                })                
            }
        }
        
        if (response.error === false) {
            this.setState({
                redirect: true
            })
        }
       
    }   

    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount(){
        const headers = {
          headers: {
          'Content-Type': 'application/json'
          }
        }
        api.get('/user/get/type', {}, headers)
        .then(res =>{
          let result = res.data;
          this.setState({
            listVal: result
          });
        })
        .catch(e =>{
          this.setState({
            listVal: e.data
          });
        })
    }
    

    render(){
        let val = ''
        if (this.state.listVal) {
            val = JSON.stringify(this.state.listVal.UserType);
        }
        
        return(
            <>
            { this.state.redirect ? <Redirect to="/admin/user" /> : ''}
            { this.state.listVal === null
                ? <>Loading</> :
                <div className="container">
                    <div className="form">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <FormInput
                                id="frist_name"
                                nameItem="frist_name"
                                label="Primeiro Nome"
                                type="text"
                                placeholder="Digite seu nome"
                                nameTarget={(e) => this.handleChange (e)}
                                classErr={this.state.inputErrFristName}
                                errMessage={this.state.errFristName}
                            />
                            <FormInput
                                id="last_name"
                                nameItem="last_name"
                                label="Último Nome"
                                type="text"
                                placeholder="Digite seu Sobrenome"
                                nameTarget={(e) => this.handleChange (e)}
                                classErr={this.state.inputErrLastName}
                                errMessage={this.state.errLastName}
                            />
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
                                classErr={this.state.inputEmailError}
                                errMessage={this.state.errEmailMessage}
                            />
                            <FormSelect 
                                id="user_type"
                                nameItem="user_type"
                                label="Tipo de Usuário"
                                nameSelecione="Um Tipo"
                                userType={val}
                                nameTarget={(e) => this.handleChange (e)}
                                classErr={this.state.inputUserTypeError}
                                errMessage={this.state.errUserTypeMessage}
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
}