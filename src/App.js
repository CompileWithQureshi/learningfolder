import React, { Component } from 'react';
// import BindEvent from './Eventbind';
// import Form from './forms';
import LifeCyle from './Lifecycle';
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
      <LifeCyle />
      {/* <Form /> */}
      {/* <BindEvent /> */}
      {/* <EventClass /> */}
      {/* <Handeler /> */}
    </div>);
  }
}

export default App;