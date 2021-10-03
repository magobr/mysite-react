import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default class PerfilMenu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
        }
        this.onClickMenu = this.onClickMenu.bind(this)
    }
    
    onClickMenu(){
        this.setState({isMenuVisible: !this.state.isMenuVisible});
    }

    render(){
        return(
            <div className="dropdown">
                <button onClick={this.onClickMenu} className="dropbtn">
                    <ion-icon name="chevron-down-outline" className="dropbtn"></ion-icon>
                </button>
                {this.state.isMenuVisible && 
                    <div id="myDropdown" className="dropdown-content show">
                        <Link to="#home">Perfil</Link>
                        <a href="/logout">Logout</a>
                    </div>
                }
            </div>
        )
    }
}