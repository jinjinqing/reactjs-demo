import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/basics/UserInput";
import UserOutput from "./components/basics/UserOutput";
import UserCounter from "./components/basics/UserCounter";
import InputText from "./components/Lists/InputText";

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
        <InputText />
      </div>
    );
  }
}

export default App;
