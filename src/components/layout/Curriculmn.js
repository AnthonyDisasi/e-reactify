import React from "react";
import "../css/style.css";

export default function Curriculmn() {
  return (
    <div className="contents container">
      <div className="card">
        <div className="card-content">
          <h4 className="customColor">Set your curriculmn</h4>
          <div className="row">
            <div className="col s12 l6 m6">
              <h5 className="customColor">A-level</h5>
              <ul class="collapsible">
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">device_hub</i>Physics
                  </div>
                  <div class="collapsible-body">
                    <span className="checkboxes">
                      <form action="#" className="left">
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Physics 1</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Physics 2</span>
                        </label>
                      </form>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">whatshot</i>Chemisty
                  </div>
                  <div class="collapsible-body">
                    <span className="checkboxes">
                      <form action="#" className="left">
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Chemistry 1</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Chemistry 2</span>
                        </label>
                      </form>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">extension</i>Math
                  </div>
                  <div class="collapsible-body">
                    <span className="checkboxes">
                      <form action="#" className="left">
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Math 1</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Math 2</span>
                        </label>
                      </form>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s12 l6 m6">
              <h5 className="customColor">O-level</h5>
              <ul class="collapsible">
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">device_hub</i>Physics
                  </div>
                  <div class="collapsible-body">
                    <span className="checkboxes">
                      <form action="#" className="left">
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Physics 1</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Physics 2</span>
                        </label>
                      </form>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">whatshot</i>Chemisty
                  </div>
                  <div class="collapsible-body">
                    <span className="checkboxes">
                      <form action="#" className="left">
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Chemistry 1</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Chemistry 2</span>
                        </label>
                      </form>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">extension</i>Math
                  </div>
                  <div class="collapsible-body">
                    <span className="checkboxes">
                      <form action="#" className="left">
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Math 1</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span className="customColor">Math 2</span>
                        </label>
                      </form>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="center-align">
            <a class="waves-effect btnColor borderRadius btn">Submit</a>
          </div>
        </div>
      </div>
    </div>
  );
}
