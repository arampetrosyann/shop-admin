import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import AddUser from "../pages/AddUser";
import UpdateUser from "../pages/UpdateUser";

const Routes = () => {
  const { signedIn } = useSelector((state) => state.admin);

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
          <Route path="/add-customer">
            <AddUser />
          </Route>
          <Route path="/customer/:id">
            <UpdateUser />
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
