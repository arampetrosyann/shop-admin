import React from "react";
import defaultClasses from "./button.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Button = (props) => {
  const {
    type,
    value,
    style,
    id,
    disabled,
    autoFocus,
    onClick,
    children,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <button
      className={classes.root}
      style={style}
      type={type}
      value={value}
      id={id}
      onClick={onClick}
      autoFocus={autoFocus}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
