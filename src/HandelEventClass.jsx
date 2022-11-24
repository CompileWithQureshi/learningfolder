import React, { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClick: "click",
    };
  }
  buttonClick = () => {
    console.log(`Button click`);
  };
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Click</button>
      </div>
    );
  }
}

export default EventClass;
