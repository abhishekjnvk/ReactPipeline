import React from 'react';
import 'tachyons';
import {Link } from "react-router-dom";

import '../assetes/Loading.css'




export default function CourseCard(props) {
    return (
        <div className="col-lg-3 mx-auto p-3  single_course text-center border border-dark py-5 p-5 br4 bg-dark-blue">
            <div className="">
                <div className="icon">
                    <img src={props.src} alt="" style={{ minWidth: 50, maxWidth: 250, minHeight: 150, maxHeight: 250, flex: 1 }} />
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
                                <a className="popup-video" href="#">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div><br />
                            <a href="#" className="boxed_btn grow">Buy Course</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Loading() {
    return (
        <div className="pa4 tc mt7">
            <div className="loadingio-spinner-ripple-0v3oh6mzkud"><div className="ldio-vdu6f5do0l">
                <div></div><div></div>
            </div></div>
            {/* <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt="avatar"/> */}
        </div >
    );
}