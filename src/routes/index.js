import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../pages/Search";
import Psikiater from "../pages/Psikiater";
import Histories from "../pages/History";
import Profile from "../pages/Profile";

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/psikiater" exact component={Psikiater} />
      <Route path="/history" exact component={Histories} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
};

export default index;
