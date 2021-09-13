import './style.css';
import React from 'react';

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
            <div class="dropdown">
                <button onClick={this.onClickMenu} class="dropbtn"><ion-icon name="chevron-down-outline" class="dropbtn"></ion-icon></button>
                {this.state.isMenuVisible && 
                    <div id="myDropdown" class="dropdown-content show">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                }
            </div>
        )
    }
}