import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

import { isAuthenticated, logout } from '../services/auth';

function Logout(){
    const history = useHistory()

    useEffect(()=>{
        logout()
        if (!isAuthenticated()) {
            history.push("/login")
        }
    })
    
    return <></>
}

export default Logout;