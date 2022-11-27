import React, { Component } from "react";

class LifeCyle extends Component {
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
    return <div>Lifecycle A</div>;
  }
}

export default LifeCyle;
