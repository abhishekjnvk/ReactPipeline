import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'tachyons';


import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default class Navbar extends Component {



    render() {
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
                                                    {(() => {
                                                        var token = cookies.get('Token');
                                                        // console.log(token)
                                                        if (token === undefined) {
                                                            return (
                                                                <li> <Link className="active" to="/Auth">Login/Register</Link></li>
                                                            )
                                                        } else {
                                                            return (
                                                                <li> <Link to="#" className="active">My Account <i className="ti-angle-down"></i></Link>
                                                                    <ul className="submenu">
                                                                        <li><Link className="active" to="/profile">Profile</Link></li>
                                                                        <li><Link className="active" to="/Logout">Logout</Link></li>
                                                                    </ul>
                                                                </li>
                                                            )
                                                        }
                                                    })()}
                                                </ul>
                                            </nav>
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
        )
    }
}