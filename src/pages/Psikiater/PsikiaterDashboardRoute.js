import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoutePsikiater from "../../components/PrivateRoutePsikiater";

import Table from "../../components/Table";
import PsikiaterHistory from "../History";
import Profile from "../Profile";

const PsikiaterDashboardRoute = ({ path }) => {
  return (
    <Switch>
      <PrivateRoutePsikiater path={`${path}/schedule`}>
        <Table />
      </PrivateRoutePsikiater>
      <PrivateRoutePsikiater path={`${path}/history`}>
        <PsikiaterHistory />
      </PrivateRoutePsikiater>
      <PrivateRoutePsikiater path={`${path}/profile`}>
        <Profile />
      </PrivateRoutePsikiater>
    </Switch>
  );
};

export default PsikiaterDashboardRoute;
