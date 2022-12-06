import React, { Component } from "react";
import PureComp from "./PureCompenent";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Sajid" };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "sajid" });
    }, 100000000000);
  }
  render() {
    console.log(`This is Parent comp`);
    return (
      <>
        Parent Component
        <br />
        <RegComp name={this.state.name} />
        <br />
        <PureComp name={this.state.name} />
      </>
    );
  }
}

export default ParentComp;
