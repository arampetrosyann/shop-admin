import React from "react";
import defaultClasses from "./checkboxGroup.module.css";
import mergeClasses from "../../../helpers/mergeClasses";
import Checkbox from "../../Checkbox";
import useCheckboxGroup from "../../../talons/useCheckboxGroup";

const CheckboxGroup = (props) => {
  const { heading, id, name, inputs = [], style, onChange } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const { values, handleOnChange } = useCheckboxGroup(onChange);

  return (
    <fieldset className={classes.root} style={style}>
      <legend className={classes.heading}>{heading}</legend>

      {inputs.map(({ value, label }, ind) => {
        return (
          <div key={ind} className={classes.container}>
            <Checkbox
              name={name}
              id={id}
              value={value}
              checked={values.includes(value)}
              label={label}
              onChange={handleOnChange}
            />
          </div>
        );
      })}
    </fieldset>
  );
};

export default CheckboxGroup;
