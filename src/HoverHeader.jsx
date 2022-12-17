import React, { Component } from "react";

class HoverHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((total) => {
      return { count: total.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <h1 onMouseOver={this.increment}>Hover {count}</h1>
      </>
    );
  }
}

export default HoverHeader;
