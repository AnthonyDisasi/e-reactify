import React, { Component } from "react";
import "../css/style.css";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import { Route, NavLink, Switch } from "react-router-dom";
import Signin from "./Signin";
import Admin from "./Admin";
import Curriculmn from "./Curriculmn";
import AddTeacher from "./AddTeacher";
import Subscription from "./Subscription";
import AddModerator from "./AddModerator";
import ClassInstructor from "./ClassInstructor";
import AdminDashboard from "./AdminDashboard";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav-extended nav-fixed white">
            <div className="nav-wrapper">
              <a className="brand-logo grey-text text-darken-3" id="page-logo">
                &nbsp; eLuminous
              </a>
              <a href="#" className="sidenav-trigger" data-target="mobile-nav">
                <i className="material-icons grey-text text-darken-4">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a
                    className="dropdown-trigger grey-text text-darken-4"
                    href="#"
                    data-target="dropdown1"
                  >
                    <i className="material-icons left grey-text text-darken-2">
                      arrow_drop_down
                    </i>
                    Admin
                  </a>

                  <ul id="dropdown1" className="dropdown-content">
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/signin"
                      >
                        <i className="material-icons cyan-text text-darken-3">
                          accessibility_new
                        </i>
                        Sign in
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/signup"
                      >
                        <i className="material-icons yellow-text text-darken-3">
                          person_add
                        </i>
                        Sign up
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/admin/admindashboard"
                      >
                        <i className="material-icons yellow-text text-darken-3">
                          person_add
                        </i>
                        Admin dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/admin/curriculmn"
                      >
                        <i className="material-icons yellow-text text-darken-3">
                          person_add
                        </i>
                        Curriculmn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/admin/addteacher"
                      >
                        <i className="material-icons yellow-text text-darken-3">
                          person_add
                        </i>
                        Add Teacher
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/admin/addmoderator"
                      >
                        <i className="material-icons yellow-text text-darken-3">
                          person_add
                        </i>
                        Add Moderator
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/admin/classinstructor"
                      >
                        <i className="material-icons yellow-text text-darken-3">
                          person_add
                        </i>
                        Subject Instructors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/admin/subscription"
                      >
                        <i className="material-icons yellow-text text-darken-3">
                          person_add
                        </i>
                        Subscription
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav yellow-text text-darken-3" id="mobile-nav">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="title"
                href="https://github.com/e-Luminous/ui"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <NavLink exact to="/signin">
                Signin
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/signup">
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admin/admindashboard">
                Admin dashboard
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admin/curriculmn">
                Curriculmn
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admin/addteacher">
                Add Teacher
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admin/addmoderator">
                Add Moderator
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admin/classinstructor">
                Subject Instructors
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admin/subscription">
                Subscription
              </NavLink>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/admin/admindashboard"
            component={AdminDashboard}
          />
          <Route exact path="/admin/curriculmn" component={Curriculmn} />
          <Route exact path="/admin/addteacher" component={AddTeacher} />
          <Route exact path="/admin/addmoderator" component={AddModerator} />
          <Route
            exact
            path="/admin/classinstructor"
            component={ClassInstructor}
          />
          <Route exact path="/admin/subscription" component={Subscription} />
        </Switch>
      </div>
    );
  }
}

export default Header;
