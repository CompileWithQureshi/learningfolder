import React, { Component } from "react";
import "./App.css";
import { Consumer } from "./ContextType";

class Guest extends Component {
  render() {
    return (
      <div className="Guest">
        <Consumer>
          {({ data, handelClick }) => (
            <div>
              <h3>
                UserName: <span>{data.name}</span>
              </h3>
              <h3>
                Age: <span>{data.Age}</span>
              </h3>
              <button onClick={handelClick}>Change Age</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}

export default Guest;
