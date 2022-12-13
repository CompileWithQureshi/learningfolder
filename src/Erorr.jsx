import React, { Component } from "react";

export default class Error extends Component {
  state = {
    hasErorr: false,
  };
  static getDerivedStateFromError(error) {
    return { hasErorr: true };
  }
  render() {
    if (this.state.hasErorr) {
      return <h2>Error: Image Not Found</h2>;
    }
    return this.props.children;
  }
}
