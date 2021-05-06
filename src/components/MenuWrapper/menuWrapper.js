import React from "react";
import AdminMenu from "../../containers/AdminMenu";
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
      <div className={classes.contentSide}>{children}</div>
    </div>
  );
};

export default MenuWrapper;
