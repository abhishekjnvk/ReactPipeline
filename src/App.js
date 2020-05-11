import React, { Component } from 'react';
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
            <Route exact path="/" >
              <IfLoggedIN cmp={Home} />
            </Route>
            <Route exact path="/dashboard" >
              <CheckLogin cmp={Dashboard} />
            </Route>
            <Route exact path="/profile" >
              <CheckLogin cmp={Profile} />
            </Route>

            <Route exact path="/view/:id" component={CoursePage} />

            <Route exact path="/courses" >
              <Courses />
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;