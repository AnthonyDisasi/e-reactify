import React, { Component } from "react";
import "../css/style.css";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import { Route, NavLink, Switch } from "react-router-dom";
import Signin from "./Signin";

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
                    Connect
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
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav yellow-text text-darken-3" id="mobile-nav">
            <li>
              <a
                target="_blank"
                className="title"
                href="https://github.com/e-Luminous/ui"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a target="_blank" href="login.html">
                Login
              </a>
            </li>
            <li>
              <a target="_blank" className="title" href="registration.html">
                Registration
              </a>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default Header;
