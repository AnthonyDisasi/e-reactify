import React from "react";
import "../css/style.css";
import { NavLink } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <header>
        <nav className="nav-extended nav-fixed white">
          <div className="nav-wrapper">
            <a href="#" className="sidenav-trigger" data-target="mobile-nav">
              <i className="material-icons grey-text text-darken-4">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink
                  exact
                  to="/curriculmn"
                  className="grey-text text-darken-4"
                >
                  Curriculmn
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/addteacher"
                  className="grey-text text-darken-4"
                >
                  Add Teacher
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/subscription"
                  className="grey-text text-darken-4"
                >
                  Subscription
                </NavLink>
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
            <NavLink to="/signin">Signin</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
