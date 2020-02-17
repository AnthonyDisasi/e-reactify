import React from "react";
import "../css/style.css";
import { NavLink } from "react-router-dom";
import signin from "../img/signin.svg";

export default function Signup() {
  return (
    <div className="contents">
      <form action="">
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h4 className="orange-text text-darken-3">Sign In</h4>
            </div>
            <div className="card col s12 l12 z-depth-2 card-border">
              <div className="card-content">
                <div className="col s6 l6">
                  <img
                    id="info-svg-signin"
                    width="300"
                    className="responsive-img"
                    src={signin}
                  />
                </div>
                <div className="col s12 l6" id="info-input-field">
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="last_name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="last_name">ID</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="center-align">
                      <NavLink
                        to="/admin/curriculmn"
                        className="waves-effect btn bgc borderRadius"
                      >
                        Login
                      </NavLink>
                      <br />
                      <br />
                      <span className="clink">
                        New here?&nbsp;{" "}
                        <NavLink exact to="/signup">
                          SignUp
                        </NavLink>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
