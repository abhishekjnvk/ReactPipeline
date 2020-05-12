import React, { Component } from 'react';
import Navbar from './Nav';
import CourseCard from './Components';
import { Header, Loading, Footer } from './Components';


export default class Courses extends Component {
  state = {
    email: '',
    name: '',
    loading: true
  };


  login() {

    fetch("https://edumark.herokuapp.com/courses/all", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    })
      .then((response) => response.text())
      .then((responseText) => {
        var response = JSON.parse(responseText)
        // console.log(response);
        if (response.response) {
          this.setState({ course: response.course })
          this.setState({ loading: false })
        }
        else {
          alert(response.message)
        }
      })
      .catch((error) => {
        // console.error(error);
      });

    return false;
  }
  render() {
    if (this.state.loading) {
      this.login()
      return (<div>
        <Navbar />
        <div className="slider_area ">
          <Header title={"All Courses"} />
          <Loading />
          <Footer />

        </div>
      </div>)
    }
    else
      return (
        <div>

          <Navbar />
          <div className="slider_area ">

            <Header title={"All Courses"} />

          </div>
          <div className="container-fluid mx-auto mt-3 row">
            {
              this.state.course.map(function (course, i) {
                return <CourseCard CourseName={course.Course_Name} shortDetail={course.ShortDescription} src={course.Poster} link={course._id} key={i} />
                // <span key={course.Course_Name}>{course.Course_Name}</span>
              })
            }

          </div>
          <Footer />
          {/* {console.log(this.props.match.params.id)} */}
        </div >
      );
  }
}
