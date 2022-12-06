import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log(`this is Pure Comp`);

    return <>Pure Component {this.props.name}</>;
  }
}

export default PureComp;
