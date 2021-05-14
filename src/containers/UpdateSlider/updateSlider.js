import React from "react";
import useUpdateSlider from "../../talons/useUpdateSlider";
import MenuWrapper from "../../components/MenuWrapper";
import Form from "../../components/Form";
import classes from "./updateSlider.module.css";

const UpdateSlider = () => {
  const { fields, formik } = useUpdateSlider();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Փոխել սլայդերի տվյալները</h1>
        <Form
          action="/"
          method="POST"
          btnValue="թարմացնել"
          fields={fields}
          disableBtn={!formik.isValid}
          onSubmit={formik.handleSubmit}
        />
      </div>
    </MenuWrapper>
  );
};

export default UpdateSlider;
