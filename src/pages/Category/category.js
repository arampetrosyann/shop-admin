import React from "react";
import defaultClasses from "./category.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useCategory from "../../talons/useCategory";
import List from "../../components/List";
import MenuWrapper from "../../components/MenuWrapper";
import CategoryForm from "../../components/CategoryForm";

const Category = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const {
    data,
    handleBtnClick,
    formType,
    handleNodeClick,
    defaultValues,
  } = useCategory();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <div className={classes.header}>
          <h1>Կատեգորիաներ</h1>

          <button className={classes.button} onClick={handleBtnClick}>
            <span className={classes.add} />
          </button>
        </div>

        <div className={classes.container}>
          <div className={classes.dataList}>
            <List data={data} onNodeClick={handleNodeClick} />
          </div>

          <div className={classes.formContainer}>
            <h3 className={classes.heading}>
              {formType === "add"
                ? "Ավելացնել Նոր Կատեգորիա"
                : "Փոխել Կատեգորիայի Տվյալները"}
            </h3>
            <CategoryForm
              defaultValues={formType === "update" ? defaultValues : {}}
              type={formType}
            />
          </div>
        </div>
      </div>
    </MenuWrapper>
  );
};

export default Category;
