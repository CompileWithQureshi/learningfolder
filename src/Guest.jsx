/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { MyContext } from "./ParentforUserandGuest";
import "./App.css";

class Guest extends Component {
  render() {
    return (
      <div className="Guest">
        <h3>Guest Component</h3>
        <MyContext.Consumer>
          {({ data, handelClick }) => (
            <div>
              <h3>
                Name: {data.name} value: {data.value}
              </h3>
              <button onClick={handelClick}>Change value</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Guest;
