import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log(`this is Reg Comp`);
    return <>Regular Component {this.props.name}</>;
  }
}

export default RegComp;
