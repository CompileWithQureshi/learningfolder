import React, { Component } from "react";

class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  Change = () => {
    this.setState({ name: "Sajid" });
  };
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.Change}>Show</button>
      </>
    );
  }
}

export default Test1;
