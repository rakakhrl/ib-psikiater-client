import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../layout/Search";
import Psikiater from "../layout/Psikiater";
import Histories from "../layout/History";
import Profile from "../layout/Profile";

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
