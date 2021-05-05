import React from "react";
import AdminMenu from "../../containers/AdminMenu";
import Layout from "../Layout";
import defaultClasses from "./menuWrapper.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const MenuWrapper = (props) => {
  const { children } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <div className={classes.menuSide}>
        <AdminMenu />
      </div>
      <div className={classes.contentSide}>
        <Layout>{children}</Layout>
      </div>
    </div>
  );
};

export default MenuWrapper;
