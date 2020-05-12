import React, { Component } from 'react';
import Navbar from './Nav';
import { Header, Footer, ShowAlert } from './Components';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_login: '',
      password_login: '',
      signup_email: '',
      signup_name: '',
      signup_password: '',
      signup_password2: '',
      alert: false,
      alert_message: '',
      alert_title: '',
      page: 'Login',
      loading: true,
    };
  }
  login() {
    let email = this.state.email_login;
    let password = this.state.password_login;
    if (!password || !email) {
      this.setState({ alert_title: "Failed", alert_message: 'Please Fill All Felids', alert: true })
    } else {
      this.setState({ alert_title: "Loading", alert_message: 'Please Wait, While we are verifying you', alert: true })
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
            // console.log(response.token);

            cookies.set('Token', response.token, { path: '/' });
            cookies.set('LoginMessage', JSON.stringify(response), { path: '/' });
            console.log("LoggedIN")
            window.location = '/';
          }
          else {
            this.setState({ alert_title: "Failed", alert_message: response.message, alert: true })
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    return false;
  }

  signup() {
    this.setState({ alert: false })
    let email = this.state.signup_email;
    let name = this.state.signup_name;
    let password = this.state.signup_password;
    let password2 = this.state.signup_password2;
    // console.log(password2)
    if (!name || !password || !password2 || !email) {
      this.setState({ alert_title: "Failed", alert_message: 'Please Fill All Felids', alert: true })
    } else {
      if (password === password2 && password.length > 5) {
        this.setState({ alert_title: "Loading", alert_message: 'Please Wait, While we are verifying you', alert: true })
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
            console.log(responseText)
            if (response.response) {
              this.setState({ alert_title: "Success", alert_message: response.message, alert: true })

              alert(response.message)

              // return <Redirect to='/' />
            } else {
              this.setState({ alert_title: "Success", alert_message: response.message, alert: true })
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
      else {
        this.setState({ alert_title: "Failed", alert_message: 'Password Must be identical and greater than 6 Character', alert: true })
        // alert("Password Must be identical and greater than 6 Character")
      }
    }
  }
  render() {
    if (this.state.page === "Login") {
      return (
        <div>
          <Navbar />
          <div className="slider_area mb5">
            <Header title={"Login"} />
            <div className="col-lg-4 mx-auto rounded mt-5 border border-dark p-5">
              <ShowAlert show={this.state.alert} heading={this.state.alert_title} message={this.state.alert_message} />
              {/* <Loading /> */}
              <form onSubmit={(e) => { e.preventDefault(); this.login() }}>

                <div className="mt-10">
                  <div className="ml-2 text-left">
                    <label className="text-dark">
                      Email
                    </label>
                  </div>
                  <input type="email" className="single-input border rounded" placeholder="Enter email" onChange={(e) => { this.setState({ email_login: e.target.value }) }} />
                </div>
                <div className="mt-10">
                  <div className="ml-2 text-left">
                    <label className="text-dark">
                      Password
                    </label>
                  </div>
                  <input type="password" className="single-input border rounded" placeholder="Password" onChange={(e) => { this.setState({ password_login: e.target.value }) }} />
                </div>
                <div className="text-center">
                  <Button variant="primary mt-3 mb-3" type="submit"> Secure Login</Button><br />
                  <Button variant="mt-3" type="button" onClick={() => { this.setState({ page: "Register" }) }}>New Here? Register Now</Button></div>
              </form>            </div>
          </div>
          <Footer />

        </div>
      );
    }
    else {
      return (
        <div>
          <Navbar />
          <div className="slider_area mb5">
            <Header title={"Registration"} />
            <div className="col-lg-4 mx-auto rounded mt-5 border border-dark p-5">
              <ShowAlert show={this.state.alert} heading={this.state.alert_title} message={this.state.alert_message} />
              <form onSubmit={(e) => { e.preventDefault(); this.signup() }}>
                <div className="mt-10">
                  <div className="ml-2 text-left">
                    <label className="text-dark">
                      Name
                 </label>
                  </div>
                  <input type="text" className="single-input border rounded" placeholder="Enter Name" onChange={(e) => { this.setState({ signup_name: e.target.value }) }} />
                </div>
                <div className="mt-10">
                  <div className="ml-2 text-left">
                    <label className="text-dark">
                      Email
                </label>
                  </div>
                  <input type="email" className="single-input border rounded" placeholder="Enter email" onChange={(e) => { this.setState({ signup_email: e.target.value }) }} />
                </div>
                <div className="mt-10">
                  <div className="ml-2 text-left">
                    <label className="text-dark">
                      Password
                  </label>
                  </div>
                  <input type="password" className="single-input border rounded" placeholder="Password" onChange={(e) => { this.setState({ signup_password: e.target.value }) }} />
                </div>
                <div className="mt-10 mb-3">
                  <div className="ml-2 text-left">
                    <label className="text-dark">
                      Retype Password
                  </label>
                  </div>
                  <input type="password" className="single-input border rounded" placeholder="Confirm password" onChange={(e) => { this.setState({ signup_password2: e.target.value }) }} />
                </div>
                <Button variant="primary mt-3 mb-3" type="submit"> Submit</Button>
              </form>
              <Button variant="mt-3" onClick={() => { this.setState({ page: "Login" }) }}>Already Have Account? Login Here</Button>
            </div>
          </div>
          <Footer />

        </div>
      );
    }
  }
}
