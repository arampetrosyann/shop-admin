import React from "react";
import AdminMenu from "../../containers/AdminMenu";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.section}>
      <div className={classes.menuSide}>
        <AdminMenu />
      </div>
      <div className={classes.contentSide}></div>
    </div>
  );
};

export default Home;
