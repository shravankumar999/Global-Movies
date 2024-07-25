import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const Outline = (props) => {
  return (
    <button
      className={`btn outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
