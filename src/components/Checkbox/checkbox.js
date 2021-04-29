import React from "react";
import PropTypes from "prop-types";
import mergeClasses from "../../helpers/mergeClasses";
import defaultClasses from "./checkbox.module.css";

function Checkbox(props) {
  const classes = mergeClasses(defaultClasses, props.classes);
  return (
    <div className={classes.checkbox}>
      <input type="checkbox" id="checkbox" checked={props.checked} onChange={props.onChange} />
      <label htmlFor="checkbox">{props.children}</label>
    </div>
  );
}

Checkbox.defaultProps = {
  className: "",
  checked: false,
  onChange: () => {},
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
