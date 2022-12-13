import React, { Component } from 'react';
// import LifeCyleA from './Lifecycle';
// import Fragment from './Fragment';
// import ParentComp from './ParentComp';
// import BindEvent from './Eventbind';
// import Form from './forms';
// import EventClass from './HandelEventClass';
// import Handeler from './HandelEvents';
import './App.css'
import ErrorBoundries from './ErorrBoundries';
// import Parent from './ParentforUserandGuest';
// import Secound from './Secound';
// const First = React.lazy(() => import('./First'))
// import CodeBundel from './CodeBundle';

class App extends Component {


  render() {
    return (<div className='App'>
      {/* <Suspense fallback={<h1 style={{ color: "red" }}>Loding....</h1>}><First /></Suspense> */}
      {/* <Parent /> */}
      <ErrorBoundries />
      {/* <CodeBundel /> */}
      {/* <Secound /> */}
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