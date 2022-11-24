import React, { Component } from "react";

class BindEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello User",
    };
  }
  clickHandler() {
    this.setState({
      message: "Hello Sajid",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.clickHandler()}>click</button>
      </div>
    );
  }
}

export default BindEvent;
