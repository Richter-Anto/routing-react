//forward ref concept example 1
import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={props.handleClick}>Submit</button>
    </div>
  );
});

export default Input;
