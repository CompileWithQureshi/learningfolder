import React, { Component } from "react";
import User from "./User";
import "./App.css";
import { Provider } from "./ContextType";

export default class Parent extends Component {
  state = {
    name: "Laiba-hudan",
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
        <img src="./Laib.jpg" alt="Img-Error" />
        <Provider value={Context}>
          <User />
        </Provider>
      </div>
    );
  }
}
