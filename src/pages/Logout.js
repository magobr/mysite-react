import React from 'react';
import { Redirect } from 'react-router';

import { logout } from '../services/auth';

export default class Logout extends React.Component{

    componentDidMount() {
        logout()
    }

    render(){
        return (
            <Redirect to="/login" />
        )
    }
} 