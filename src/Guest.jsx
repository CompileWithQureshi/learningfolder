/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { MyContext } from "./ParentforUserandGuest";
class Guest extends Component {
  render() {
    return (
      <div className="Guest">
        <h3>Guest Component</h3>
        <MyContext.Consumer>{(value) => <h3>{value}</h3>}</MyContext.Consumer>
      </div>
    );
  }
}

export default Guest;
