import React, { Component } from 'react';
import Navbar from './Nav';
import { Header, Loading, Footer } from './Components';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Profile extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            loading: true
        };
    }
    fetchProfileDetail() {

        let token_cookie = (cookies.get('Token'))
        var body = cookies.get('LoginMessage')

        const options = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token_cookie
            },
            body: JSON.stringify(body)
        }
        fetch('https://edumark.herokuapp.com/users/verify', options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data.authData.user)
                this.setState({ loading: false, name: data.authData.user.name, email: data.authData.user.email, userType: data.authData.user.userType })
            })
    }
    render() {

        if (this.state.loading) {
            return <div>
                <Navbar />
                <Header title={"My Profile"} />
                <Loading />
                <Footer />
                {this.fetchProfileDetail()}</div>
        }
        return (
            <div>
                <Navbar />
                {/* <div className="slider_area mb5"> */}
                <Header title={"My Profile"} />
                <div className="col-lg-4 mx-auto mb-5 rounded mt-5 border border-dark p-5">
                    <div className="mt-10">
                        <div className="ml-2 text-left">
                            <label className="text-dark">
                                Name
                                    </label>
                        </div>
                        <input type="text" className="single-input border rounded" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} disabled />
                    </div>
                    <div className="mt-10">
                        <div className="ml-2 text-left">
                            <label className="text-dark">
                                Email
                                    </label>
                        </div>
                        <input type="text" className="single-input border rounded" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} disabled />
                    </div>
                    <div className="mt-10">
                        <div className="ml-2 text-left">
                            <label className="text-dark">
                                User Type
                                    </label>
                        </div>
                        <input type="text" className="single-input border rounded" value={this.state.userType} disabled />
                    </div>
                </div>
                {/* </div> */}
                <Footer />

            </div>
        );
    }
}
