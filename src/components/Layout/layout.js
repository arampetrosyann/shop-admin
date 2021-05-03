import React from "react";
import defaultClasses from "./layout.module.css";

const Layout = ({ children }) => {
  return <div className={defaultClasses.container}>{children}</div>;
};

export default Layout;
