import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { IfLoggedIN, Logout, CheckLogin } from './comp/CheckLogin'
import Home from './comp/Home'
import Dashboard from './comp/Dashboard'
import Profile from './comp/Profile';
import Courses from './comp/Course';
import CoursePage from './comp/CoursePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route path="/" >
              <IfLoggedIN cmp={Home} />
            </Route>
            <Route path="/dashboard" >
              <CheckLogin cmp={Dashboard} />
            </Route>
            <Route path="/profile" >
              <CheckLogin cmp={Profile} />
            </Route>

            <Route path="/view/:id" component={CoursePage} />

            <Route path="/courses" >
              <Courses />
            </Route>


            <Route path="*" component={Home} />

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;