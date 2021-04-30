import React from "react";
import defaultClasses from "./input.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Input = (props) => {
  const {
    type,
    value,
    id,
    name,
    holder,
    onChange,
    onBlur,
    onClick,
    style,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <input
      className={classes.root}
      style={style}
      type={type}
      value={value}
      id={id}
      name={name}
      placeholder={holder}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
    />
  );
};

export default Input;
