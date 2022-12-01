import React, { Component } from "react";

class LifeCyleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vishvas",
    };
    console.log(`LifeCycelB`);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(`LifecycleB getDerivedStateFromProps`);
    return null;
  }
  componentDidMount() {
    console.log(`lifecycleB componentDidMount`);
  }
  shouldComponentUpdate() {
    console.log(`lifecycleB componentDidMount`);
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log(`lifecycleB componentDidMount`);
    return null;
  }
  componentDidUpdate() {
    console.log(`lifecycleB componentDidMount`);
  }
  render() {
    console.log(`lifecycleB render`);
    return (
      <div>
        <div>Lifecycle B</div>
      </div>
    );
  }
}

export default LifeCyleB;
