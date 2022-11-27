import React, { Component } from "react";
import LifeCyleB from "./LifecycleB";

class LifeCyleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vishvas",
    };
    console.log(`LifeCycelA`);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(`LifecycleA getDerivedStateFromProps`);
    return null;
  }
  componentDidMount() {
    console.log(`lifecycle componentDidMount`);
  }
  render() {
    console.log(`lifecycleA render`);
    return (
      <div>
        <div>Lifecycle A</div>
        <LifeCyleB />
      </div>
    );
  }
}

export default LifeCyleA;
