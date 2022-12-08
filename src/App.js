import React, { Component, Suspense } from 'react';
// import LifeCyleA from './Lifecycle';
// import Fragment from './Fragment';
// import ParentComp from './ParentComp';
// import BindEvent from './Eventbind';
// import Form from './forms';
// import EventClass from './HandelEventClass';
// import Handeler from './HandelEvents';
import './App.css'
import Secound from './Secound';
const First = React.lazy(() => import('./First'))
// import CodeBundel from './CodeBundle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (<div className='App'>
      <Suspense fallback={<h1 style={{ color: "red" }}>Loding....</h1>}><First /></Suspense>

      {/* <CodeBundel /> */}
      <Secound />
      {/* <Fragment /> */}
      {/* <ParentComp /> */}
      {/* <LifeCyleA /> */}
      {/* <Form /> */}
      {/* <BindEvent /> */}
      {/* <EventClass /> */}
      {/* <Handeler /> */}
    </div>);
  }
}

export default App;