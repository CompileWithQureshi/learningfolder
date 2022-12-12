import React, { Component } from "react";
import { MyContext } from "./ParentforUserandGuest";
import "./App.css";

class Guest extends Component {
  render() {
    return (
      <div className="Guest">
        <MyContext.Consumer>
          {({ data, handelClick }) => (
            <div>
              <h3>UserName: {data.name} </h3>
              <h3>Age: {data.Age}</h3>
              <button onClick={handelClick}>Change Age</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Guest;
