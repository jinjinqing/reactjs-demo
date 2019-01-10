import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import UserCounter from "./components/UserCounter";

class App extends Component {
  state = {
    input: "test"
  };

  inputUpdateHandler = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-header">This is a React Demo!!</h1>
        <UserInput text={this.state.input} update={this.inputUpdateHandler} />
        <UserOutput text={this.state.input} />
        <UserCounter />
      </div>
    );
  }
}

export default App;
