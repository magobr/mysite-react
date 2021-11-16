import React, {useState, useEffect} from 'react';
import jwt from 'jwt-decode';
import { Link } from 'react-router-dom';

import { getToken, isAuthenticated } from '../../services/auth';
import PerfilMenu from './PerfilMenu';

import './style.css';

function HeaderAdmin(){

    const [randColor, setRandColor] = useState();

    const randomColor = () => {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        
        let res = `rgba(${r}, ${g}, ${b}, ${1})`;
        setRandColor(res);
    }

    useEffect(()=>{
        randomColor()
    },[])
    
    let user = '';
    if(isAuthenticated()){
        user = jwt(getToken());
    }

    return(
        <div className="header">
            <header>
                <div className="top-container">
                    <div className="img-perfil" style={{backgroundColor: `${randColor}`, border: `solid 5px ${randColor}`}}>
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
                            <li><Link to="/admin/user">Listar Usuários</Link></li>
                            <li><Link to="/admin/user/new">Criar Usuŕaio</Link></li>
                            <li><Link to="/admin/news">Listar Noticias</Link></li>
                            <li><Link to="/admin/news/new">Criar Noticias</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default HeaderAdmin;