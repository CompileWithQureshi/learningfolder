import React, { Component } from "react";
import Images from "./Images";
import "./App.css";

class ErrorBoundries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <span>
          <Images img="./logo512.png" />
        </span>
        <Images img="./logo192.png" />
        <Images img="null" />
      </>
    );
  }
}

export default ErrorBoundries;
