import React from "react";
import "../css/style.css";

export default function ClassInstructor() {
  return (
    <div className="contents">
      <h4 className="fgc">Subject Instructors</h4>
      <div className="row">
        <div className="col s12 l4 m4">
          <div className="card">
            <div className="card-content">
              <h5 className="center-align nameBlock">Physics</h5>
              <table className="centered striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair@gmail.com</td>
                    <td>
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>
                      {" "}
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>
                      {" "}
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col s12 l4 m4">
          <div className="card">
            <div className="card-content">
              <h5 className="center-align nameBlock">Chemisty</h5>
              <table className="centered striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>
                      {" "}
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>
                      {" "}
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>
                      {" "}
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col s12 l4 m4">
          <div className="card">
            <div className="card-content">
              <h5 className="center-align nameBlock">Math</h5>
              <table className="centered striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>
                      <div className="switch">
                        <label className="fgc">
                          Inactive
                          <input type="checkbox" />
                          <span className="lever"></span>
                          Active
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
