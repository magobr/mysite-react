import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
   

    function PerfilMenu(){
        const [ isMenuVisible, setMenuVisible ] = useState(false)

        const onClickMenu = () => {
            setMenuVisible(!isMenuVisible);
        }

        return(
            <div className="dropdown">
                <button onClick={onClickMenu} className="dropbtn">
                    <ion-icon name="chevron-down-outline" className="dropbtn"></ion-icon>
                </button>
                {isMenuVisible && 
                    <div id="myDropdown" className="dropdown-content show">
                        <Link to="#home">Perfil</Link>
                        <a href="/logout">Logout</a>
                    </div>
                }
            </div>
        )
    }
export default PerfilMenu;