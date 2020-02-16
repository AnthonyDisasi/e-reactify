import React, { Component } from "react";
import "../css/style.css";
import signupsvg from "../img/signup.svg";
import { NavLink } from "react-router-dom";

class Signin extends Component {
  render() {
    return (
      <div className="contents">
        <form action="">
          <div class="container">
            <div class="row">
              <br />
              <div class="center-align">
                <h4 class="orange-text text-darken-3">Sign Up</h4>
              </div>
              <div class="card col s12 l12 z-depth-2 card-border">
                <div class="card-content">
                  <div class="col s6 l6">
                    <img
                      id="info-svg-signup"
                      width="500"
                      class="responsive-img"
                      src={signupsvg}
                    />
                    <br />
                    <br />
                  </div>
                  <div class="col s12 l6" id="info-input-field">
                    <div class="row">
                      <div class="input-field col s12 l12">
                        <input id="last_name" type="text" class="validate" />
                        <label for="last_name">ID</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12 l12">
                        <input id="email" type="email" class="validate" />
                        <label for="email">Email</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12 l12">
                        <input id="password" type="password" class="validate" />
                        <label for="password">Password</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12 l12">
                        <input
                          id="cpassword"
                          type="password"
                          class="validate"
                        />
                        <label for="cpassword">Confirm Password</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="center-align">
                        <a
                          href="signin.html"
                          class="waves-effect btn btnColor borderRadius"
                        >
                          Register
                        </a>
                        <br />
                        <br />
                        <span class="clink">
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
