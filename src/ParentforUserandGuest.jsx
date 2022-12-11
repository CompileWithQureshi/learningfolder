import React, { Component } from "react";
import User from "./User";
import "./App.css";

export const MyContext = React.createContext({ name: "Sajid" });

export default class Parent extends Component {
  state = {
    name: "Sajid",
    value: 1,
  };
  render() {
    const state = this.state;
    return (
      <div className="Parent">
        <h3>Parent Component : {state.name}</h3>
        <MyContext.Provider value={state.name}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
