import React from "react";
import defaultClasses from "./categoryForm.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useCategoryForm from "../../talons/useCategoryForm";
import Form from "../Form";
import Button from "../Button";

const CategoryForm = (props) => {
  const { type = "add" } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const { fields, formik, handleDeleteBtn } = useCategoryForm({ type });

  return (
    <Form
      action="/"
      method="POST"
      btnValue={type === "update" ? "Թարմացնել" : "Ավելացնել"}
      fields={fields}
      onSubmit={formik.handleSubmit}
      classes={{ root: classes.root, submitBtn: classes.submitBtn }}
    >
      {type === "update" ? (
        <Button
          type="button"
          onClick={handleDeleteBtn}
          classes={{ root: classes.deleteBtn }}
        >
          Ջնջել
        </Button>
      ) : null}
    </Form>
  );
};

export default CategoryForm;
