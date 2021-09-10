import './style.css';

import PerfilMenu from './menuDropDown';

export default function Header() {
    return(
        <div className="header">
            <header>
                <div class="top-container">
                    <div class="img-perfil">
                        <span class="first-letter">R</span>
                    </div>
                    <div class="name-perfil">
                        <div class="userName">
                            <p>Roberto Costa</p>
                        </div>
                    </div>
                    < PerfilMenu />
                    <div class="static-menu">
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