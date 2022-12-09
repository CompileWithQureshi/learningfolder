import React, { Component } from "react";
import User from "./User";

class Parent extends Component {
  state = {
    name: "Sajid",
  };
  render() {
    return (
      <>
        <h2>Parent component</h2>
        <User name={this.state.name} />
      </>
    );
  }
}

export default Parent;
