import React, { Component } from "react";
import User from "./User";
import "./App.css";

export const MyContext = React.createContext({ Name: "Qureshi", Value: "1" });
export default class Parent extends Component {
  state = {
    name: "SAJID",
    Age: 22,
  };
  handelClickContext = () => {
    this.setState({ Age: this.state.Age + 1 });
  };
  render() {
    const Context = {
      data: this.state,
      handelClick: this.handelClickContext,
    };
    return (
      <div className="Parent">
        <h3>Parent Component</h3>
        <MyContext.Provider value={Context}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
