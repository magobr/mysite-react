import './style.css';

import PerfilMenu from './menuDropDown';

export default function Header() {
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
                    < PerfilMenu />
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