import React from "react";
import MenuWrapper from "../../components/MenuWrapper";
import Form from "../../components/Form";
import useAddSlider from "../../talons/useAddSlider";
import classes from "./addSlider.module.css";

const AddSlider = () => {
  const { fields, formik, disableBtn } = useAddSlider();
  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Ավելացնել ապրանք</h1>
        <Form
          action="/"
          method="POST"
          btnValue="Ավելացնել"
          fields={fields}
          disableBtn={disableBtn}
          onSubmit={formik.handleSubmit}
        />
      </div>
    </MenuWrapper>
  );
};

export default AddSlider;
