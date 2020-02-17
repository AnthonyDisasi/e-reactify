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
        <div className="row">
          <div className="col s12 l12 offset-l3 offset-m3">
            <ul className="tabs center">
              <li className="tab col s3">
                <a className="active" href="#test1">
                  Upload File
                </a>
              </li>
              <li className="tab col s3">
                <a href="#test2">Add a Teacher</a>
              </li>
            </ul>
          </div>
          <div id="test1" className="col s12">
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
                      <h6 className="left-align fgc">
                        Upload teacher list file (.xlsx)
                      </h6>
                      <br />
                      <div className="file-field input-field">
                        <div className="btn bgc borderRadius">
                          <span>File</span>
                          <input type="file" multiple />
                        </div>
                        <div className="file-path-wrapper">
                          <input
                            className="file-path validate bgc"
                            type="text"
                            placeholder="Upload one or more files"
                          />
                        </div>
                      </div>
                      <div className="center-align">
                        <a className="waves-effect bgc borderRadius btn">
                          Upload
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="test2" className="col s12">
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
                      <div className="row">
                        <div className="input-field col s12 l12">
                          <input
                            placeholder="John Doe"
                            id="first_name"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="first_name">Teacher Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 l12">
                          <input
                            placeholder="john@gmail.com"
                            id="first_name"
                            type="email"
                            className="validate"
                          />
                          <label htmlFor="first_name">Teacher Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 l12">
                          <input
                            placeholder="Physics"
                            id="first_name"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="first_name">Subject Name</label>
                        </div>
                      </div>
                      <div className="center-align">
                        <a className="waves-effect bgc borderRadius btn">
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
