import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
};

export default Routes;
