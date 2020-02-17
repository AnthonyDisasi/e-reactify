import React, { Component } from "react";
import "../css/style.css";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: "July 27, 2020"
    };
    console.log("Deadline", this.state.deadline);
  }

  getTime = () => {
    let time = Date.parse(this.state.deadline) - Date.parse(new Date());
    // console.log("later unit", time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(((time / 1000) * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({ days, hours, minutes, seconds });
  };

  componentWillMount = () => {
    this.getTime();
  };

  componentDidMount = () => {
    setInterval(() => {
      this.getTime();
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };

  render() {
    return (
      <div className="contents container">
        <h4 className="fgc">Subscription</h4>
        <div className="row">
          <div className="col s12 l12">
            <h3>Time Remains</h3>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.days}</h3>
                  <h6>Days</h6>
                </div>
              </div>
            </div>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.hours} </h3>
                  <h6>Hours</h6>
                </div>
              </div>
            </div>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.minutes} </h3>
                  <h6>Minutes</h6>
                </div>
              </div>
            </div>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.seconds} </h3>
                  <h6>Seconds</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription;
