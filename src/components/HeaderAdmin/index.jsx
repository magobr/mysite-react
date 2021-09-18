import React from 'react';

import PerfilMenu from './PerfilMenu';

import './style.css';

export default class HeaderAdmin extends React.Component {
    render(){
        return(
            <div className="header">
                <header>
                    <div className="top-container">
                        <div className="img-perfil">
                            <span className="first-letter">R</span>
                        </div>
                        <div className="name-perfil">
                            <div className="userName">
                                <p>Roberto Costa</p>
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