import React, { Component } from "react";
import User from "./User";

class Parent extends Component {
  state = {
    name: "Sajid",
  };
  render() {
    return <User name={this.state.name} />;
  }
}

export default Parent;
