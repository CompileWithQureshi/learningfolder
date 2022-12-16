import React, { Component } from "react";
import ChildRef from "./ChildRef";

export class ForwardRef extends Component {
  constructor(props) {
    super(props);
    this.state = React.createRef();
  }
  render() {
    return (
      <div>
        <h1>Forward Ref</h1>
        <ChildRef ref={this.state} />
        <br />
        <br />
        <span></span>
        <button
          onClick={() => {
            this.state.current.focus();
          }}
        >
          Update Child
        </button>
      </div>
    );
  }
}
