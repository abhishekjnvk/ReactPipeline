import React, { Component } from 'react';
// import { HashRouter } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { IfLoggedIN, Logout, CheckLogin } from './comp/CheckLogin'
import Home from './comp/Home'
import Profile from './comp/Profile';
import Courses from './comp/Course';
import CoursePage from './comp/CoursePage';
import Auth from './comp/Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/" >
              <IfLoggedIN cmp={Home} />
            </Route>
            <Route exact path="/dashboard" >
              <CheckLogin cmp={Home} />
            </Route>
            <Route exact path="/profile" >
              {/* <CheckLogin cmp={Profile} /> */}
              <Profile/>
            </Route>

            <Route exact path="/view/:id" component={CoursePage} />
            <Route exact path="/courses" >
              <Courses />
            </Route>
            <Route exact path="/Auth" >
              <Auth />
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;