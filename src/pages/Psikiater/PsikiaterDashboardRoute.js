import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoutePsikiater from "../../components/PrivateRoutePsikiater";

import Table from "../../components/Table";
import PsikiaterHistory from "../History/index";
import Profile from "../Profile/index";

const PsikiaterDashboardRoute = ({ path }) => {
  return (
    <Switch>
      <PrivateRoutePsikiater path={`${path}`} exact>
        <Table />
      </PrivateRoutePsikiater>
      <PrivateRoutePsikiater path={`${path}/history`} exact>
        <PsikiaterHistory />
      </PrivateRoutePsikiater>
      <PrivateRoutePsikiater path={`${path}/profile`} exact>
        <Profile />
      </PrivateRoutePsikiater>
    </Switch>
  );
};

export default PsikiaterDashboardRoute;
