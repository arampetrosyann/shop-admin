import React from "react";
import defaultClasses from "./spinner.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Spinner = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.container}>
      <div className={classes.root} />
    </div>
  );
};

export default Spinner;
