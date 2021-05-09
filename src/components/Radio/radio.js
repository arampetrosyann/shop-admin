import React from "react";
import defaultClasses from "./radio.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Radio = (props) => {
  const { heading, inputs = [], style, onChange } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <fieldset className={classes.root} style={style}>
      <legend className={classes.heading}>{heading}</legend>

      {inputs.map(({ id, name, value, checked, label }, ind) => {
        return (
          <div key={ind} className={classes.container}>
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              checked={checked}
              onChange={onChange}
              className={classes.input}
            />
            {label ? (
              <label htmlFor={value} className={classes.label}>
                {label}
              </label>
            ) : null}
          </div>
        );
      })}
    </fieldset>
  );
};

export default Radio;
