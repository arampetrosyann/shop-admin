import React from "react";
import defaultClasses from "./checkbox.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Checkbox = (props) => {
  const {
    name,
    checked,
    value,
    title,
    style,
    ref,
    label,
    onChange,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.root} style={style}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        value={value}
        ref={ref}
        title={title}
        style={style}
        onChange={onChange}
        className={classes.checkbox}
      />
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
