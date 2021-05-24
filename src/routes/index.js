import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import ProductsTable from "../containers/ProductsTable";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import AddUser from "../pages/AddUser";
import UpdateUser from "../pages/UpdateUser";
import ReviewsTable from "../containers/ReviewsTable";
import SlidersTable from "../containers/SlidersTable";
import AddAndUpdateSlider from "../containers/AddAndUpdateSlider";
import Category from "../pages/Category";

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
            <ProductsTable />
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
          <Route path="/sliders">
            <SlidersTable />
          </Route>
          <Route path="/add-slider">
            <AddAndUpdateSlider />
          </Route>
          <Route path="/slider/:id">
            <AddAndUpdateSlider />
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
