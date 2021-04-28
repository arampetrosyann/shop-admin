import React from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../AdminMenu";
import classes from "./sections.module.css";

const Sections = () => {
  return (
    <div className={classes.section}>
      <div className={classes.menuSide}>
        <AdminMenu />
      </div>
      <div className={classes.contentSide}>
        <Layout>aaaaaaa</Layout>
      </div>
    </div>
  );
};

export default Sections;
