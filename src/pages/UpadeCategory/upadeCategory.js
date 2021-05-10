import React from "react";
import defaultClasses from "./upadeCategory.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import MenuWrapper from "../../components/MenuWrapper";
import CategoryForm from "../../components/CategoryForm";

const UpadeCategory = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Փոխել Կատեգորիայի Տվյալները</h1>
        <CategoryForm type="update" />
      </div>
    </MenuWrapper>
  );
};

export default UpadeCategory;
