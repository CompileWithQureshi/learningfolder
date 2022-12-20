import React, { Component } from "react";

class First extends Component {
  componentDidMount() {
    for (let i = 0; i < 1000000000; i++) {}
  }
  render() {
    return (
      <>
        <p>First page</p>
        <br />
      </>
    );
  }
}

export default First;
