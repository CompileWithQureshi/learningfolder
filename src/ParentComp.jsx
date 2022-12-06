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
    }, 2000);
  }
  render() {
    return (
      <>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </>
    );
  }
}

export default ParentComp;
