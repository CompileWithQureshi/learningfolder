import React, { Component } from "react";
import User from "./User";
import "./App.css";

export const MyContext = React.createContext({ name: "Sajid" });

export default class Parent extends Component {
  state = {
    name: "sajid",
    value: 1,
  };
  render() {
    return (
      <div>
        <MyContext.Provider value={this.state}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
