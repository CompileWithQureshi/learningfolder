import React, { Component } from "react";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { img } = this.props;
    if (img === "null") {
      console.error(`image not found`);
      throw new Error("Error ");
    }
    return (
      <div>
        <img src={this.props.img} alt="Img-erorr" width="100" height="100" />
      </div>
    );
  }
}
