import React from "react";

const inputChar = props => {
  const style = {
    displsy: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center"
  };
  return (
    <span style={style} onClick={props.click}>
      {" "}
      {props.text}{" "}
    </span>
  );
};

export default inputChar;
