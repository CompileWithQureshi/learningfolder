import React, { Component } from "react";
import Guest from "./Guest";
import "./App.css";

class User extends Component {
  render() {
    return (
      <div className="User">
        <h3>User Component</h3>
        <Guest />
      </div>
    );
  }
}

export default User;
