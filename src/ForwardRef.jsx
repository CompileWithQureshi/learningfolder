import React, { Component } from "react";
import ChildRef from "./ChildRef";

export class ForwardRef extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Forward Ref</h1>
        <ChildRef />
      </div>
    );
  }
}
