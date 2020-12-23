import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import List from "./components/List";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Register saveButton="Enter" login />
        </Route>
        <Route path="/register">
          <Register saveButton="Save" />
        </Route>
        <Route path="/list" exact>
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;