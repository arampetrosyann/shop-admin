import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import { useSelector } from "react-redux";

const Routes = () => {
  const { signedIn } = useSelector((state) => state.user);

  return (
    <Switch>
      {signedIn ? (
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-product">
            <AddProduct />
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
