import React from 'react';
import { Redirect } from "react-router-dom";

export function CheckLogin(props) {
    var token = localStorage.getItem("Token");
    // console.log(token)
    if (token == null) {
        return <Redirect to='/' />
    }
    else {
        return <div><props.cmp /></div>
    }
}

export function IfLoggedIN(props) {
    var token = localStorage.getItem("Token");
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