import React from "react";
import defaultClasses from "./addCategory.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import MenuWrapper from "../../components/MenuWrapper";
import CategoryForm from "../../components/CategoryForm";

const AddCategory = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Ավելացնել Նոր Կատեգորիա</h1>
        <CategoryForm type="add" />
      </div>
    </MenuWrapper>
  );
};

export default AddCategory;
