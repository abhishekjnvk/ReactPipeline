import React from 'react';
import { Redirect } from "react-router-dom";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function CheckLogin(props) {
    var token =cookies.get('Token');
    // console.log(token)
    if (token == null) {
        return <Redirect to='/' />
    }
    else {
        return <div><props.cmp /></div>
    }
}

export function IfLoggedIN(props) {
    var token = cookies.get('Token');
    if (token != null) {
        return <Redirect to='dashboard' />
    }
    else {
        return <div><props.cmp /></div>
    }
}

export function Logout() {
    localStorage.clear();
    return <Redirect to='/' />
}