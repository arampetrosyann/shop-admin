import React from "react";
import MenuWrapper from "../../components/MenuWrapper";
import Form from "../../components/Form";
import Input from "../../components/Input";
import ImageFile from "../../components/Files";
import useAddSlider from "../../talons/useAddSlider";
import classes from "./addSlider.module.css";

const AddSlider = () => {
  const { fields, formik, addSlider, handleAddForm } = useAddSlider();

  return (
    <MenuWrapper>
      <div className={classes.section}>
        <h1 className={classes.heading}>Ավելացնել սլայդեր</h1>
        <Form
          action="/"
          method="POST"
          btnValue="Ավելացնել"
          fields={fields}
          onSubmit={formik.handleSubmit}
          classes={{ root: classes.root }}
          style={{ marginTop: "50px" }}
        >
          <span
            className={
              formik.values.selectSlider.length !== 0
                ? classes.addSlider
                : classes.disabledRemoveButton
            }
            onClick={handleAddForm}
          >
            <div className={classes.addFields}>
              <Input placeholder="Add content" />
              <ImageFile placeholder="Add image" />
            </div>
          </span>
        </Form>
      </div>
    </MenuWrapper>
  );
};

export default AddSlider;
