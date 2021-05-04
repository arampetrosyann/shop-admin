import React from "react";
import AdminMenu from "../../containers/AdminMenu";
import ProductTable from "../../containers/ProductTable";
import CustomerTable from "../../containers/CustomerTable";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.section}>
      <div className={classes.menuSide}>
        <AdminMenu />
      </div>
      <div className={classes.contentSide}>
        <ProductTable />
        <CustomerTable />
      </div>
    </div>
  );
};

export default Home;
