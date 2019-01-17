import React from "react";

const inputTextValidation = props => {
  let validation = null;
  if (props.text.length < 5) {
    validation = <p>Input text is too short (min 5 letters)</p>;
  } else if (props.text.length > 20) {
    validation = <p>Input text is too long (max 20 letters)</p>;
  }
  return <div>{validation}</div>;
};

export default inputTextValidation;
