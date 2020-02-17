import React, { Component } from "react";
import "../css/style.css";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 };
  }
  render() {
    return (
      <div className="contents container">
        <h4 className="fgc">Subscription</h4>
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <div className="card">
              <div className="card-content">
                <h3>Time Remains</h3>
                <h2> {this.state.count} </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };
}

export default Subscription;
