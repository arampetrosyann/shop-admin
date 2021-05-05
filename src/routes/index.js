import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import CustomerTable from "../containers/CustomerTable";
import ProductTable from "../containers/ProductTable";
import AddProduct from "../pages/AddProduct";
import AddUser from "../pages/AddUser";
import { useSelector } from "react-redux";

const Routes = () => {
  const { signedIn } = useSelector((state) => state.admin);

  return (
    <Switch>
      {signedIn ? (
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductTable />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/customers">
            <CustomerTable />
          </Route>
          <Route path="/add-customer">
            <AddUser />
          </Route>
        </>
      ) : (
        <Route path="/sign-in">
          <SignIn />
        </Route>
      )}
    </Switch>
  );
};

export default Routes;
