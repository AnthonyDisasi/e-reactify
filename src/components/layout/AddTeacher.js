import React, { Component } from "react";
import "../css/style.css";
import file from "../img/file.svg";
import teacher from "../img/teacher.svg";

class AddTeacher extends Component {
  render() {
    return (
      <div className="contents container">
        <h4 className="fgc">Add teacher</h4>
        <br />
        <div class="row">
          <div class="col s12 l12 offset-l3 offset-m3">
            <ul class="tabs center">
              <li class="tab col s3">
                <a className="active" href="#test1">
                  Upload Teacher File
                </a>
              </li>
              <li class="tab col s3">
                <a href="#test2">Input a Teacher</a>
              </li>
            </ul>
          </div>
          <div id="test1" class="col s12">
            <div className="card col s12 l12 z-depth-2 card-border">
              <div className="card-content">
                <div className="col s6 l6">
                  <img
                    id="info-svg-signin"
                    width="300"
                    className="responsive-img"
                    src={file}
                  />
                </div>
                <div className="col s12 l6" id="info-input-field">
                  <div className="row">
                    <form action="#">
                      <div class="file-field input-field">
                        <div class="btn bgc borderRadius">
                          <span>File</span>
                          <input type="file" multiple />
                        </div>
                        <div class="file-path-wrapper">
                          <input
                            class="file-path validate bgc"
                            type="text"
                            placeholder="Upload one or more files"
                          />
                        </div>
                      </div>
                      <div className="center-align">
                        <a class="waves-effect bgc borderRadius btn">Upload</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="test2" class="col s12">
            <div className="card col s12 l12 z-depth-1 card-border">
              <div className="card-content">
                <div className="col s6 l6">
                  <img
                    id="info-svg-teacher"
                    width="300"
                    className="responsive-img"
                    src={teacher}
                  />
                </div>
                <div className="col s12 l6" id="info-input-field">
                  <div className="row">
                    <form action="#">
                      <div class="row">
                        <div class="input-field col s12 l12">
                          <input
                            placeholder="John Doe"
                            id="first_name"
                            type="text"
                            class="validate"
                          />
                          <label for="first_name">Teacher Name</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12 l12">
                          <input
                            placeholder="john@gmail.com"
                            id="first_name"
                            type="email"
                            class="validate"
                          />
                          <label for="first_name">Teacher Email</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12 l12">
                          <input
                            placeholder="Physics"
                            id="first_name"
                            type="text"
                            class="validate"
                          />
                          <label for="first_name">Subject Name</label>
                        </div>
                      </div>
                      <div className="center-align">
                        <a class="waves-effect bgc borderRadius btn">
                          Save teacher
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTeacher;
