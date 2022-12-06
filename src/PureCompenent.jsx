import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  state = {};
  render() {
    return <>Pure Component {this.state.name}</>;
  }
}

export default PureComp;
