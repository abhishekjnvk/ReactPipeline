import React, { Component } from 'react';
import {Link } from "react-router-dom";
import 'tachyons';




export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email_login: '',
            password_login: '',
            signup_email: '',
            signup_name: '',
            signup_password: '',
            signup_password2: ''
        };
    }
    login() {
        let email = this.state.email_login;
        let password = this.state.password_login;
        if (!password || !email) {
            alert("Please Fill All felids")
        } else {
            fetch("https://edumark.herokuapp.com/users/login?", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            })
                .then((response) => response.text())
                .then((responseText) => {
                    var response = JSON.parse(responseText)
                    if (response.token) {
                        console.log(response.token);
                        localStorage.setItem("Token", JSON.stringify(response));
                        window.location = "/dashboard"
                    }
                    else {
                        alert(response.message)
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        return false;
    }

    signup() {
        let email = this.state.signup_email;
        let name = this.state.signup_name;
        let password = this.state.signup_password;
        let password2 = this.state.signup_password2;
        console.log(password2)
        if (password === password2 && password.length > 5) {

            if (!name || !password || !password2 || !email) {
                alert("Please Fill All felids")
            } else {
                fetch("https://edumark.herokuapp.com/users/register?", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name, email, password, password2
                    })
                })
                    .then((response) => response.text())
                    .then((responseText) => {
                        var response = JSON.parse(responseText)
                        if (response.response) {
                            // $.confirm({
                            //     title: 'Confirm!',
                            //     content: response.message,
                            //     buttons: {
                            //         'Okay': function () {
                            //             window.location = '/'
                            //         }
                            //     }
                            // });
                            alert(response.message);
                            window.location='/';
                        } else { alert(response.message) }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            return false;
        }
        else {
            alert("Password Must be identical and greater than 6 Character")
        }
    }

    render() {
        var token = localStorage.getItem("Token");
        // console.log('tokem' + token);
        if (token != null) {
            return (
                <div>
                    <header>
                        <div className="header-area ">
                            <div id="sticky-header" className="main-header-area">
                                <div className="container-fluid p-0">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="logo-img">
                                                 <Link to="/dashboard">
                                                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-lg-7">
                                            <div className="main-menu  d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li> <Link className="active" to="/dashboard">Dashboard</Link></li>
                                                        <li> <Link className="active" to="/courses">Courses</Link></li>
                                                        {/* <li> <Link to="#">My Courses <i className="ti-angle-down"></i></Link>
                                                            <ul className="submenu">
                                                                <li> <Link to="courses">Active</Link></li>
                                                                <li> <Link to="archived">Archived</Link></li>
                                                            </ul>
                                                        </li> */}
                                                        <li> <Link className="active" to="/profile">Profile</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                            <div className="log_chat_area d-flex align-items-center">
                                                 <Link to="/logout" className="login">
                                                    <i className="flaticon-user"></i>
                                                    <span>log Out</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>


                </div >
            );
        }
        else
            return (
                <div>
                    <header>
                        <div className="header-area ">
                            <div id="sticky-header" className="main-header-area">
                                <div className="container-fluid p-0">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="logo-img">
                                                 <Link to="/dashboard">
                                                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-lg-7">
                                            <div className="main-menu  d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li> <Link className="active" to="/">home</Link></li>
                                                        <li> <Link className="active" to="/courses">Courses</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                            <div className="log_chat_area d-flex align-items-center">
                                                 <a href="#test-form" className="login popup-with-form">
                                                    <i className="flaticon-user"></i>
                                                    <span>log in</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div id="test-form" className="white-popup-block mfp-hide">
                        <div className="popup_box ">
                            <div className="popup_inner">
                                <div className="logo text-center">
                                     <Link to="#">
                                        <img src={process.env.PUBLIC_URL + 'img/form-logo.png'} alt="" />
                                    </Link>
                                </div>
                                <h3>Sign in</h3>
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <input type="email" placeholder="Enter email" onChange={(e) => { this.setState({ email_login: e.target.value }) }} />
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <input type="password" placeholder="Password" onChange={(e) => { this.setState({ password_login: e.target.value }) }} />
                                    </div>
                                    <div className="col-xl-12">
                                        <button type="submit" className="boxed_btn_orange text-dark" onClick={() => this.login()}>Sign in</button>
                                    </div>
                                </div>
                                <p className="doen_have_acc">Don’t have an account?  <Link className="dont-hav-acc" to="#test-form2">Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="test-form2" className="white-popup-block mfp-hide">
                        <div className="popup_box ">
                            <div className="popup_inner">
                                <div className="logo text-center">
                                     <Link to="#">
                                        <img src={process.env.PUBLIC_URL + 'img/form-logo.png'} alt="" />
                                    </Link>
                                </div>
                                <h3>Registration</h3>
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <input type="text" placeholder="Enter Name" onChange={(e) => { this.setState({ signup_name: e.target.value }) }} />
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <input type="email" placeholder="Enter email" onChange={(e) => { this.setState({ signup_email: e.target.value }) }} />
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <input type="password" placeholder="Password" onChange={(e) => { this.setState({ signup_password: e.target.value }) }} />
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <input type="Password" placeholder="Confirm password" onChange={(e) => { this.setState({ signup_password2: e.target.value }) }} />
                                    </div>
                                    <div className="col-xl-12">
                                        <button type="submit" className="boxed_btn_orange" onClick={(e) => { this.signup(); e.preventDefault(); }}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            );
    }
}
