import React from "react";

const userOutput = props => {
  const style = {
    color: "blue",
    fontSize: "18px",
    padding: "20px"
  };
  return (
    <div style={style}>
      <p>{props.text}</p>
    </div>
  );
};

export default userOutput;
