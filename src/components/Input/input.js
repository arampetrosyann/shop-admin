import React from "react";
import defaultClasses from "./input.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Input = (props) => {
  const {
    type,
    value,
    id,
    name,
    placeholder,
    maxLength,
    error = "",
    onChange,
    onBlur,
    style,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <>
      <input
        className={
          error ? `${classes.root} ${classes.error}` : classes.root
        }
        style={style}
        type={type}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <p className={classes.errorMessage}>{error}</p> : null}
    </>
  );
};

export default Input;
