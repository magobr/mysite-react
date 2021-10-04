import React from 'react';
import jwt from 'jwt-decode';

import { getToken } from '../../services/auth';
import PerfilMenu from './PerfilMenu';

import './style.css';

export default class HeaderAdmin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            randColor: "#0984e3",
        }
    }

    randomColor = () => {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        
        let res = `rgba(${r}, ${g}, ${b}, ${1})`;
        this.setState({
            randColor: res
        })
    }

    componentDidMount(){
        this.randomColor();
    }
     
    render(){

        let user = jwt(getToken());

        console.log()

        return(
            <div className="header">
                <header>
                    <div className="top-container">
                        <div className="img-perfil" style={{backgroundColor: `${this.state.randColor}`, border: `solid 5px ${this.state.randColor}`}}>
                            <span className="first-letter"><b>{user.frist_name.substr(0,1)}</b></span>
                        </div>
                        <div className="name-perfil">
                            <div className="userName">
                                <p>{user.frist_name} {user.last_name}</p>
                            </div>
                        </div>
                        <PerfilMenu />
                        <div className="static-menu">
                            <ul>
                                <li><a href="/a">Criar Noticias</a></li>
                                <li><a href="/a">Minhas Noticias</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}