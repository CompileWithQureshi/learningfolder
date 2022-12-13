import React, { Component } from "react";
import User from "./User";
import "./App.css";

export const MyContext = React.createContext({ Name: "Qureshi", Value: "1" });
export default class Parent extends Component {
  state = {
    name: "Laiba",
    Age: 2,
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
        <h3>Laiba</h3>
        <img src="./Laib.jpg" alt="Img-Error" />
        <MyContext.Provider value={Context}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
