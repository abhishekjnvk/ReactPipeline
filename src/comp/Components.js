import React from 'react';
import 'tachyons';
import { Link } from "react-router-dom";

import '../assetes/Loading.css'




export default function CourseCard(props) {
    return (
        <div className="col-lg-4 col-md-6 mx-auto p-3  ">
            <div className="col-lg-8 col-sm-12 col-md-12 mx-auto single_course text-center border border-dark py-5 p-5 br4 bg-dark-blue">
                <div className="icon">
                    <img src={props.src} alt="" style={{ minWidth: 50, maxWidth: '100%', minHeight: 150, maxHeight: 250, flex: 1 }} />
                </div>
                <h3 className="text-white mt-4">{props.CourseName}</h3>
                <p className='text-white'>
                    {props.shortDetail}
                </p>
                <Link className="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink" to={'view/' + props.link}>Learn More</Link>

            </div>
        </div>)
}



export function Header(props) {
    return (
        <div className="bradcam_area breadcam_bg overlay2">
            <h3>
                {props.title}
            </h3>
        </div>
    )
}

export function CourseDetailHeader(props) {
    return (
        <div className="courses_details_banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="course_text">
                            <h3>{props.detail.Course_Name}</h3>
                            <div className="prise">
                                <span className="inactive">₹{props.detail.Price}.00</span>
                                <span className="active">₹0.00</span>
                            </div>
                            <div className="hours">
                                <div className="video">
                                    <div className="single_video">
                                        <i className="fa fa-clock-o"></i> <span>{props.detail.Total_Videos} Videos</span>
                                    </div>
                                    <div className="single_video">
                                        <i className="fa fa-play-circle-o"></i> <span>{props.detail.Duration} Hrs</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function CourseDetail(props) {
    return (
        <div className="courses_details_info">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="single_courses">
                            <h3>Objectives</h3>
                            <p>
                                {props.detail.Description}
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="courses_sidebar">
                            <div className="video_thumb">
                                <img src={props.detail.Poster} alt="" className="rounded grow" />
                                <Link to="#" className="popup-video">
                                    <i className="fa fa-play"></i>
                                </Link>
                            </div><br />
                            <div className="boxed_btn grow">Buy Course</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Loading() {
    return (
        <div className="pa4 tc mt4">
            <div className="loadingio-spinner-ripple-0v3oh6mzkud"><div className="ldio-vdu6f5do0l">
                <div></div><div></div>
            </div></div>
            {/* <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt="avatar"/> */}
        </div >
    );
}

export function Footer() {
    return (
        <footer className="footer footer_bg_1">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 mx-auto col-md-6 col-lg-4">
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <img src="img/logo.png" alt="" />
                                </div>
                                <p>
                                    Firmament morning sixth subdue darkness creeping gathered divide our let god moving.
                                    Moving in fourth air night bring upon it beast let you dominion likeness open place day
                                    great.
                            </p>

                            </div>
                        </div>
                        <div className="col-xl-2 mx-auto col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Links
                            </h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="courses">All Courses</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                Copyright ©{(new Date().getFullYear())} All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export function ShowAlert(props) {
    if(props.show){
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>{props.heading}</strong><br/> {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                {/* <span aria-hidden="true">&times;</span> */}
            </button>
        </div>
    )
}
else{
    return '';
}
}

