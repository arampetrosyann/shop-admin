import React, { useState } from "react";
import MenuWrapper from "../../components/MenuWrapper";
import Form from "../../components/Form";
import useAddSlider from "../../talons/useAddSlider";
import classes from "./addSlider.module.css";

const AddSlider = () => {
  const [selectToggle, setSelectToggle] = useState(false);

  const change = (e) => {
    setSelectToggle(!selectToggle);
    setSelectValue(e.target.value);
  };

  const { fields, formik } = useAddSlider();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Ավելացնել սլայդեր</h1>
        <Form
          action="/"
          method="POST"
          btnValue="Ավելացնել"
          fields={fields}
          onSubmit={formik.handleSubmit}
          classes={{ root: classes.root }}
        />
      </div>
    </MenuWrapper>
  );
};

export default AddSlider;
