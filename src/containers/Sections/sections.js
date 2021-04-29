import React from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../AdminMenu";
import ArticleContent from "../ArticleContent";
import classes from "./sections.module.css";

const Sections = () => {
  return (
    <div className={classes.section}>
      <div className={classes.menuSide}>
        <AdminMenu />
      </div>
      <div className={classes.contentSide}>
        <ArticleContent />
      </div>
    </div>
  );
};

export default Sections;
