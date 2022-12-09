import React, { Component } from "react";
import Guest from "./Guest";

class User extends Component {
  render() {
    return (
      <>
        <h3>User Component</h3>
        <Guest nm={this.props.name} />
      </>
    );
  }
}

export default User;
