import React, { Component } from "react";
import "./App.css";
import { MyContext } from "./ContextType";
class Guest extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="Guest">
        <div>
          <h3>
            UserName: <span>{this.context.data.name}</span>
          </h3>
          <h3>
            Age: <span>{this.context.data.Age}</span>
          </h3>
          <button onClick={this.context.handelClick}>Change Age</button>
        </div>
      </div>
    );
  }
}

export default Guest;
