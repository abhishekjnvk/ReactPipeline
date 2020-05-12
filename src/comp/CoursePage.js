import React, { Component } from 'react';
import Navbar from './Nav';
import { CourseDetailHeader, CourseDetail, Loading,Header,Footer } from './Components';

export default class CoursePage extends Component {
    state = {
        email: '',
        name: '',
        loading: true
    };
    fetchCourse() {
        var course_id = this.props.match.params.id;
        if (course_id) {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: course_id })
            }
            fetch('https://edumark.herokuapp.com/courses/view', options)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data.course)
                    this.setState({ courseDetail: data.course })
                    this.setState({ loading: false })
                })
            console.log(this.props.match.params.id
            )
        } else {
            alert('Bad Request')
        }
    }
    render() {
        if (this.state.loading) {
            return <div>

                <Navbar />
                <div className="slider_area ">
                    <Header title={"All Courses"} />
                    <Loading />
                    <Footer />

                    <Loading />
                    {this.fetchCourse()}</div>
            </div>
        }
        return (
            <div>
                <Navbar />
                <div className="slider_area ">
                    <CourseDetailHeader detail={this.state.courseDetail} />
                    <CourseDetail detail={this.state.courseDetail} />
                    <div>

                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}
