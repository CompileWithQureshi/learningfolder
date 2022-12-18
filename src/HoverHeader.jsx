import React, { Component } from "react";
import UpdateComponent from "./withCounter";

class HoverHeader extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <h1 onMouseOver={increment}>
          {this.props.name}Hover {count}
        </h1>
      </>
    );
  }
}

export default UpdateComponent(HoverHeader);
