import React, { Component } from "react";
import Images from "./Images";
import "./App.css";
import Error from "./Erorr";

class ErrorBoundries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Error>
          <span className="Image-f1">
            <Images img="./logo512.png" />
          </span>
        </Error>
        <Error>
          <Images img="./logo192.png" />
        </Error>
        <Error>
          <Images img="null" />
        </Error>
      </>
    );
  }
}

export default ErrorBoundries;
