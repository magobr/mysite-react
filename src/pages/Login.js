import FormInput from "../components/form/Input";
import FormButton from "../components/form/Button";
import React from 'react';


export default class Login extends React.Component{

  render(){
    return (
      <div onSubmit={(event)=>this.handleSubmit(event)}>
        <FormInput
            id="teste" 
            nameItem="aaa"
            label="E-mail"
        />
        <FormButton
            classes="btn-blue"
            id="btn-login"
            name="btn-login"
            labelName="Entrar"
        />
      </div>
    );
  }
} 