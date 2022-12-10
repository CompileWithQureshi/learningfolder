/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Mycontext from "./ParentforUserandGuest";
class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component </h3>
        <Mycontext.Consumer>{(value) => <h2>{value}</h2>}</Mycontext.Consumer>
        <Mycontext.displayName>
          {(value) => <h2>{value}</h2>}
        </Mycontext.displayName>
      </div>
    );
  }
}

export default Guest;
