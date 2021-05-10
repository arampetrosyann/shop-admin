import React from "react";
import defaultClasses from "./categoryForm.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useCategoryForm from "../../talons/useCategoryForm";
import Form from "../Form";

const CategoryForm = (props) => {
  const { type = "add" } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const { fields, formik } = useCategoryForm({ type });

  return (
    <Form
      action="/"
      method="POST"
      btnValue={type === "update" ? "Թարմացնել" : "Ավելացնել"}
      fields={fields}
      onSubmit={formik.handleSubmit}
      classes={{ root: classes.root }}
    />
  );
};

export default CategoryForm;
