import React, { Component } from 'react';
import Navbar from './Nav';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="slider_area ">
                    <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-6 col-md-6">
                                    <div className="illastrator_png">
                                        <img src={process.env.PUBLIC_URL + 'img/banner/edu_ilastration.png'} alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6">
                                    <div className="slider_info">
                                        <h3>Learn your <br />
                        Favorite Course <br />
                            From Online</h3>
                                        <a href="#" className="boxed_btn">Browse Our Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_area">

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="single_about_info">
                                    <h3>Over 7000 Tutorials <br />
                                    from 20 Courses</h3>
                                    <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god
                                    moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open
                            place day great wherein heaven sixth lesser subdue fowl </p>
                                    <a href="#" className="boxed_btn">Enroll a Course</a>
                                </div>
                            </div>
                            <div className="col-xl-6 offset-xl-1 col-lg-6">
                                <div className="about_tutorials">
                                    <div className="courses">
                                        <div className="inner_courses">
                                            <div className="text_info">
                                                <span>20+</span>
                                                <p> Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-blue">
                                        <div className="inner_courses">
                                            <div className="text_info">
                                                <span>7638</span>
                                                <p> Courses</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="courses-sky">
                                        <div className="inner_courses">
                                            <div className="text_info">
                                                <span>230+</span>
                                                <p> Courses</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
