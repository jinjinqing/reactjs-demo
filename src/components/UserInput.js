import React from "react";

const userInput = props => {
  const style = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "28px",
    width: "50%",
    padding: "10px",
    margin: "auto"
  };
  return (
    <div style={style}>
      <p>Please input: </p>
      <input value={props.text} onChange={props.update} />
    </div>
  );
};

export default userInput;
