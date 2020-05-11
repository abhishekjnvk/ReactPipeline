import React, { Component } from 'react';
import Navbar from './Nav';
import { Header } from './Components'

export default class Profile extends Component {
    state = {
        email: '',
        name: '',
        loading: true
    };
    fetchProfileDetail() {
        var token = JSON.parse(localStorage.getItem("Token"));
        var tokenID = JSON.stringify(token.token)
        const options = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenID.replace(/"/g, "")
            },
            body: JSON.stringify(token)
        }
        fetch('https://edumark.herokuapp.com/users/verify', options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.authData.user)
                this.setState({ loading: false, name: data.authData.user.name, email: data.authData.user.email, userType: data.authData.user.userType })
            })
    }
    render() {
        if (this.state.loading) {
            return <div>
                Loading
              {this.fetchProfileDetail()}</div>
        }
        return (
            <div>
                <Navbar />
                <div className="slider_area ">

                    <Header title={"My Profile"} />
                    <div className="col-lg-4 mx-auto rounded mt-5 border border-dark p-5">
                        <div class="mt-10">
                            <div className="ml-2 text-left">
                                <label className="text-dark">
                                    Name
                                    </label>
                            </div>
                            <input type="text" class="single-input border rounded" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} disabled />
                        </div>
                        <div class="mt-10">
                            <div className="ml-2 text-left">
                                <label className="text-dark">
                                    Email
                                    </label>
                            </div>
                            <input type="text" class="single-input border rounded" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} disabled />
                        </div>
                        <div class="mt-10">
                            <div className="ml-2 text-left">
                                <label className="text-dark">
                                    User Type
                                    </label>
                            </div>
                            <input type="text" class="single-input border rounded" value={this.state.userType} disabled />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
