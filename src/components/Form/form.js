import React from "react";
import defaultClasses from "./form.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useForm from "../../talons/useForm";
import Button from "../Button";

const Form = (props) => {
  const {
    fields,
    action,
    method,
    style,
    children,
    disableBtn,
    btnValue,
    onSubmit,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const { getField } = useForm();

  return (
    <form
      className={classes.root}
      style={style}
      action={action}
      method={method}
      onSubmit={onSubmit}
    >
      {fields.map(({ field, before, after, ...rest }, ind) => {
        return (
          <div key={ind} className={classes.container}>
            {before || null}
            {getField(field, rest)}
            {after || null}
          </div>
        );
      })}
      {children}
      <div className={classes.btnContainer}>
        <Button
          type="submit"
          disabled={disableBtn}
          classes={{ root: classes.submitBtn }}
        >
          {btnValue}
        </Button>
      </div>
    </form>
  );
};

export default Form;
