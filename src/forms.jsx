import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      topic: "React",
    };
  }
  addUser = (e) => {
    this.setState({ value: e.target.value });
    console.log({ value: e.target.value });
  };
  changetopic = (e) => {
    this.setState({ topic: e.target.value });
    console.log({ value: e.target.value });
  };
  handelSubmit = (event) => {
    event.preventDefault();
    alert(this.state.value + "  and the library : " + this.state.topic);
    console.log(
      `${this.state.value}   and the library :   ${this.state.topic}`
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label>
            Username:
            <input
              type="text "
              value={this.state.value}
              onChange={this.addUser}
            />
          </label>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.changetopic}>
              <option>Reacts.js</option>
              <option>Angular.js</option>
              <option>Vue.js</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
