import React from "react";
import "../css/style.css";

export default function AdminDashboard() {
  return (
    <div className="contents container">
      <div className="row">
        <div className="col s12 l4">
          <div className="card hoverable gradient-45deg-cyan-light-green gradient-shadow">
            <div className="card-content">
              <span className="white-text">Registered Teacher</span>
              <h2 className="center-align white-text">53</h2>
            </div>
          </div>
        </div>
        <div className="col s12 l4">
          <div className="card hoverable gradient-45deg-purple-deep-orange gradient-shadow">
            <div className="card-content">
              <span className="center-align white-text">
                Registered Student
              </span>
              <h2 className="center-align white-text">500</h2>
            </div>
          </div>
        </div>
        <div className="col s12 l4">
          <div className="card gradient-45deg-indigo-purple gradient-shadow">
            <div className="card-content">
              <span className="center-align white-text">Created Classroom</span>
              <h2 className="center-align white-text">150</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
