import React, { Component } from "react";

class userCounter extends Component {
  state = {
    counter: 0
  };
  decrease = () => {
    this.setState(prev => ({ counter: prev.counter - 1 }));
  };
  increase = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <p>{this.state.counter}</p>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default userCounter;
