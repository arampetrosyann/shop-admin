import React from "react";
import defaultClasses from "./updateProduct.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import MenuWrapper from "../../components/MenuWrapper";
import ProductForm from "../../components/ProductForm";

const UpdateProduct = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Փոխել Ապրանքի Տվյալները</h1>
        <ProductForm type="update" />
      </div>
    </MenuWrapper>
  );
};

export default UpdateProduct;
