import React from "react";
import defaultClasses from "./category.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useCategory from "../../talons/useCategory";
import List from "../../components/List";
import MenuWrapper from "../../components/MenuWrapper";
import CategoryForm from "../../components/CategoryForm";
import CategoryContext from "../../context/category";
import getCategoriesTree from "../../helpers/getCategoriesTree";

const Category = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const {
    data,
    refetch,
    handleBtnClick,
    formType,
    setFormType,
    handleNodeClick,
    selectedCategory,
    setSelectedCategory,
  } = useCategory();

  return (
    <MenuWrapper>
      <CategoryContext.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
          data,
          refetch,
          setFormType,
        }}
      >
        <div className={classes.root}>
          <div className={classes.header}>
            <h1>Կատեգորիաներ</h1>

            <button className={classes.button} onClick={handleBtnClick}>
              <span className={classes.add} />
            </button>
          </div>

          <div className={classes.container}>
            <div className={classes.dataList}>
              <List
                data={data ? getCategoriesTree(data.items) : []}
                onNodeClick={handleNodeClick}
              />
            </div>

            <div className={classes.formContainer}>
              <h3 className={classes.heading}>
                {formType === "add"
                  ? "Ավելացնել Նոր Կատեգորիա"
                  : "Փոխել Կատեգորիայի Տվյալները"}
              </h3>
              <CategoryForm type={formType} />
            </div>
          </div>
        </div>
      </CategoryContext.Provider>
    </MenuWrapper>
  );
};

export default Category;
