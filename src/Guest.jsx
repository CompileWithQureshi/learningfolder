import React, { Component } from "react";

class Guest extends Component {
  render() {
    return (
      <>
        <h3>Guest Component : {this.props.nm}</h3>
      </>
    );
  }
}

export default Guest;
