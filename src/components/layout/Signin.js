import React from "react";
import "../css/style.css";
import signupgsvg from "../img/signup.svg";

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
                    src={signupgsvg}
                  />
                </div>
                <div className="col s6 l6" id="info-input-field">
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        placeholder="161-35-0000"
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
                        placeholder="At least 6 digit"
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
                      <a
                        href="index.html"
                        className="waves-effect waves-light btn purple darken-4"
                      >
                        Login
                      </a>
                      <br />
                      <br />
                      <span className="clink">
                        New here?&nbsp; <a href="signup.html">SignUp</a>
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
