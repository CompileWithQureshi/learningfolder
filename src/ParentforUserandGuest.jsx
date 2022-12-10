import React, { Component } from "react";
import User from "./User";
import "./App.css";

export const MyContext = React.createContext();

export default class Parent extends Component {
  state = {
    name: "Sajid",
  };
  render() {
    return (
      <div className="Parent">
        <h3>Parent Component : {this.state.name}</h3>
        <MyContext.Provider value={this.state.name}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
