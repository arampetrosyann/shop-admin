import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
};

export default Routes;
