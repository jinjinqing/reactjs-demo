import React, { Component } from "react";
import InputTextValidation from "./InputTextValidation";
import InputChar from "./InputChar";
import "./inputText.css";

class InputText extends Component {
  state = {
    inputText: "",
    inputLength: 0
  };

  inputChangeHandler = event => {
    const inputValue = event.target.value;
    this.setState({
      inputText: inputValue,
      inputLength: inputValue.length
    });
  };

  removeCharHandler = index => {
    const textArr = this.state.inputText.split("");
    textArr.splice(index, 1);
    const newInputText = textArr.join("");
    this.setState({
      inputText: newInputText,
      inputLength: newInputText.length
    });
  };

  render() {
    const inputTextCharsArr = this.state.inputText.split("");
    const inputChars = inputTextCharsArr.map((char, index) => {
      return (
        <InputChar
          click={() => this.removeCharHandler(index)}
          text={char}
          key={index}
        />
      );
    });

    let textStyle = [];

    if (this.state.inputLength > 10) {
      textStyle.push("red");
    }
    if (this.state.inputLength > 20) {
      textStyle.push("bold");
    }
    return (
      <div className="App">
        <div>
          <p>Please input: </p>
          <input
            value={this.state.inputText}
            onChange={this.inputChangeHandler}
          />
          <p className={textStyle.join(" ")}>
            Length: {this.state.inputLength}
          </p>
          <InputTextValidation text={this.state.inputText} />
          {inputChars}
        </div>
      </div>
    );
  }
}

export default InputText;
