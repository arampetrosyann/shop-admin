import React from "react";
import defaultClasses from "./textarea.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Input = (props) => {
  const {
    id,
    name,
    value,
    placeholder,
    error = "",
    rows = 5,
    onChange,
    style,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <>
      <textarea
        className={
          error ? `${classes.root} ${classes.error}` : classes.root
        }
        style={style}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
      />
      {error ? <p className={classes.errorMessage}>{error}</p> : null}
    </>
  );
};

export default Input;
