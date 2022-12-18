import React, { Component } from "react";
import UpdateComponent from "./withCounter";

class HOC extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <button onClick={increment}>
          {this.props.name}Count {count}
        </button>
      </>
    );
  }
}

export default UpdateComponent(HOC);
