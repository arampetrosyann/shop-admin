import React from "react";
import defaultClasses from "./productForm.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useProductForm from "../../talons/useProductForm";
import Form from "../Form";

const ProductForm = (props) => {
  const { type = "add" } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const { fields, formik } = useProductForm({ type });

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

export default ProductForm;
