import React, { Component } from "react";
import User from "./User";
import "./App.css";

export const MyContext = React.createContext({ name: "Sajid" });

export default class Parent extends Component {
  state = {
    name: "sajid",
    value: 1,
  };
  handelClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    const contextValue = {
      data: this.state,
      handelClick: this.handelClickContext,
    };
    return (
      <div>
        <MyContext.Provider value={contextValue}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
