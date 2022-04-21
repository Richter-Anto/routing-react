//forward ref concept example 1
import React, { useRef } from "react";
import Input from "./Input";

const Form = () => {
  let InputRef = useRef();
  let handleClick = () => {
    InputRef.current.placeholder = "Please add some text";
    InputRef.current.style.background = "red";
  };
  return (
    <div>
      <Input ref={InputRef} handleClick={handleClick} />
    </div>
  );
};

export default Form;
