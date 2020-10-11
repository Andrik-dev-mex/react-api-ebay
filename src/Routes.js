import React from "react";
import {Switch,Route}from "react-router-dom";
import Index from "./../src/components/index";
import DetailsItem from "./components/detailsItem";

const Routes = () => {
  return(
    <Switch>
      <Route exact path = {"/"} component = {Index}/>
      <Route exact path = {"/details/:id"} component = {DetailsItem}/>
    </Switch>
  );
};

export default Routes;