import React from "react";
import defaultClasses from "./option.module.css";
import mergeClasses from "../../../helpers/mergeClasses";

const Option = (props) => {
  const { value, label, active, onClick, style } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <li
      data-value={value}
      className={
        active ? `${classes.root} ${classes.activeOption}` : classes.root
      }
      onClick={onClick}
      style={style}
    >
      {label}
    </li>
  );
};

export default Option;
