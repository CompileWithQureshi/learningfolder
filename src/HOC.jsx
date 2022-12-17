import React, { Component } from "react";

class HOC extends Component {
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
        <button onClick={this.increment}>Count {count} </button>
      </>
    );
  }
}

export default HOC;
