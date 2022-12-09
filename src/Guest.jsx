import React, { Component } from "react";

class Guest extends Component {
  render() {
    return (
      <>
        <h3>Guest Component </h3>
        <h4>{this.props.nm}</h4>
      </>
    );
  }
}

export default Guest;
