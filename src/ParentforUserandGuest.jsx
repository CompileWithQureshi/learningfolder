import React, { Component } from "react";
import User from "./User";

export const Mycontext = React.createContext();
class Parent extends Component {
  state = {
    name: "Sajid",
  };
  render() {
    return (
      <div>
        <h2>Parent component : {this.state.name}</h2>
        <Mycontext.Provider value={this.state.name}>
          <User />
        </Mycontext.Provider>
      </div>
    );
  }
}

export default Parent;
