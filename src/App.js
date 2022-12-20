import React, { Component, Suspense } from 'react';
// import CodeBundel from './CodeBundle';
// import LifeCyleA from './Lifecycle';
// import Fragment from './Fragment';
// import ParentComp from './ParentComp';
// import BindEvent from './Eventbind';
// import Form from './forms';
// import EventClass from './HandelEventClass';
// import Handeler from './HandelEvents';
import './App.css'
import TodoList from './jsxDepth';
// import Integrating from './Integrating';
// import Example from './Hooks';
// import HOC from './Hoc';
// import HoverHeader from './HoverHeader';

// import Test1 from './Test1';
// import { ForwardRef } from './ForwardRef';
// import ErrorBoundries from './ErorrBoundries';
// import Parent from './ParentforUserandGuest';
// import Secound from './Secound';
const First = React.lazy(() => import('./First'))

class App extends Component {


  render() {
    return (<div className='App'>
      {/* <Example />
      <Integrating /> */}
      <TodoList />

      {/* <Test1 />
      <HOC />
      <HoverHeader />
      <ForwardRef /> */}
      <Suspense fallback={<h1 style={{ color: "red" }}>Loding....</h1>}><First /></Suspense>
      {/* <Parent />
      <ErrorBoundries />
      <CodeBundel />
      <Secound />
      <Fragment />
      <ParentComp />
      <LifeCyleA />
      <Form />
      <BindEvent />
      <EventClass />
      <Handeler /> */}
    </div>);
  }
}

export default App;