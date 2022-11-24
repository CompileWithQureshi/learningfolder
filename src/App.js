import React, { Component } from 'react';
import EventClass from './HandelEventClass';
// import Handeler from './HandelEvents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: 'Sajid'
    }
  }

  render() {
    return (<div>
      <EventClass />
      {/* <Handeler /> */}
    </div>);
  }
}

export default App;