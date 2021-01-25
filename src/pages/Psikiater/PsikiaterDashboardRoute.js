import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutePsikiater from "../../components/PrivateRoutePsikiater";

import Table from "../../components/Table";
import PsikiaterHistory from "../History/index";
import Profile from "../Profile/index";

const PsikiaterDashboardRoute = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <Table />
      </Route>
      <Route path={`${path}/history`} exact>
        <PsikiaterHistory />
      </Route>
      <Route path={`${path}/profile`} exact>
        <Profile />
      </Route>
    </Switch>
  );
};

export default PsikiaterDashboardRoute;
