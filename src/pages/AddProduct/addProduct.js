import React from "react";
import defaultClasses from "./addProduct.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import MenuWrapper from "../../components/MenuWrapper";
import ProductForm from "../../components/ProductForm";

const AddProduct = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Ավելացնել ապրանք</h1>
        <ProductForm type="add" />
      </div>
    </MenuWrapper>
  );
};

export default AddProduct;
