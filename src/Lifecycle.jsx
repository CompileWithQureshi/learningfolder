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
  shouldComponentUpdate() {
    console.log(`lifecycle componentDidMount`);
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log(`lifecycle componentDidMount`);
    return null;
  }
  componentDidUpdate() {
    console.log(`lifecycle componentDidMount`);
  }
  Changestate = () => {
    this.setState({ name: "Codeveloction" });
  };
  render() {
    console.log(`lifecycleA render`);
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.Changestate}>Change state</button>
        <LifeCyleB />
      </div>
    );
  }
}

export default LifeCyleA;
