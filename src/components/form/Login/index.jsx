import FormButton from "../Button";
import FormInput from "../Input";
import React from "react";

import "./style.css";

export default class FromLogin extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="form">
                    <form>
                        <FormInput
                            id="email"
                            name="email"
                            label="E-mail"
                            type="email"
                            placeholder="Digite seu E-mail"
                        />
                        <FormInput
                             id="senha"
                             name="senha"
                             label="Senha"
                             type="password"
                             placeholder="Digite sua Senha"
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