import React, { Component } from "react";
import "../css/style.css";
import signupsvg from "../img/signup.svg";
import { NavLink } from "react-router-dom";

class Signin extends Component {
  render() {
    return (
      <div className="contents">
        <form action="">
          <div className="container">
            <div className="row">
              <div className="center-align">
                <h4 className="orange-text text-darken-3">Sign Up</h4>
              </div>
              <div className="card col s12 l12 z-depth-2 card-border">
                <div className="card-content">
                  <div className="col s6 l6">
                    <img
                      id="info-svg-signup"
                      width="500"
                      className="responsive-img"
                      src={signupsvg}
                    />
                    <br />
                    <br />
                  </div>
                  <div className="col s12 l6" id="info-input-field">
                    <div className="row">
                      <div className="input-field col s12 l12">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="last_name">ID</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 l12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 l12">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 l12">
                        <input
                          id="cpassword"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="cpassword">Confirm Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="center-align">
                        <a
                          href="signin.html"
                          className="waves-effect btn bgc borderRadius"
                        >
                          Register
                        </a>
                        <br />
                        <br />
                        <span className="clink">
                          Already have an account?&nbsp;{" "}
                          <NavLink exact to="/signin">
                            SignIn
                          </NavLink>
                        </span>
                        <br />
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
}

export default Signin;
