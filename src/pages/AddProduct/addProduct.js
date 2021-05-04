import React from "react";
import defaultClasses from "./addProduct.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useAddProduct from "../../talons/useAddProduct";
import MenuWrapper from "../../components/MenuWrapper";
import Form from "../../components/Form";

const AddProduct = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const { fields, formik } = useAddProduct();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Ավելացնել ապրանք</h1>
        <Form
          action="/"
          method="POST"
          btnValue="Ավելացնել"
          fields={fields}
          onSubmit={formik.handleSubmit}
        />
      </div>
    </MenuWrapper>
  );
};

export default AddProduct;
