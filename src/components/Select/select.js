import React from "react";
import defaultClasses from "./select.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useSelect from "../../talons/useSelect";
import Option from "./Option";

const Select = (props) => {
  const { options = [], id = "", onChange, style } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const {
    showDropdown,
    optionLabel,
    handleOnClick,
    handleOptionClick,
  } = useSelect(onChange, classes);

  return (
    <div className={classes.container} style={style} id={id}>
      <div className={classes.root} onClick={handleOnClick}>
        {optionLabel}
      </div>
      {showDropdown ? (
        <div className={classes.dropdown}>
          {
            <ul>
              {options.map(({ value, label }, ind) => {
                return (
                  <Option
                    key={value + "" + ind}
                    active={optionLabel === label}
                    value={value}
                    classes={{ root: classes.option }}
                    onClick={() => handleOptionClick({ value, label })}
                    label={label}
                  />
                );
              })}
            </ul>
          }
        </div>
      ) : null}
    </div>
  );
};

export default Select;
