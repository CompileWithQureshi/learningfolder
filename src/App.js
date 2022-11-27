import React, { Component } from 'react';
import LifeCyleA from './Lifecycle';
// import BindEvent from './Eventbind';
// import Form from './forms';
// import EventClass from './HandelEventClass';
// import Handeler from './HandelEvents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (<div>
      <LifeCyleA />
      {/* <Form /> */}
      {/* <BindEvent /> */}
      {/* <EventClass /> */}
      {/* <Handeler /> */}
    </div>);
  }
}

export default App;