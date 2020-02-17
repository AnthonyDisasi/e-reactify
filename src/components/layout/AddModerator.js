import React, { Component } from "react";
import "../css/style.css";

export class AddModerator extends Component {
  render() {
    return (
      <div className="contents container">
        <div className="card">
          <div className="card-content">
            <h5 className="fgc">Add New Moderator</h5>
            <form className="col s12 l12 m12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="first_name" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="row">
                  <a className="waves-effect bgc borderRadius btn">
                    add to list
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <h5 className="fgc">Moderator List</h5>
          <table className="centered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>alvin@gmail.com</td>
                <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">clear</i>
                  </a>
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>alan@gmail.com</td>
                <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">clear</i>
                  </a>
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>jonathan@gmail.com</td>
                <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">clear</i>
                  </a>
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AddModerator;
