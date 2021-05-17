import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import ProductTable from "../containers/ProductTable";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import AddUser from "../pages/AddUser";
import UpdateUser from "../pages/UpdateUser";
import ReviewsTable from "../containers/ReviewsTable";
import Category from "../pages/Category";
import Orders from "../pages/Orders";

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
          <Route path="/product/:id">
            <UpdateProduct />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>
          <Route path="/add-customer">
            <AddUser />
          </Route>
          <Route path="/customer/:id">
            <UpdateUser />
          </Route>
          <Route path="/reviews">
            <ReviewsTable />
          </Route>
          <Route path="/orders">
            <Orders />
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
