import React from "react";
import { Switch, Route } from "react-router-dom";

import RegisterPasien from "../Register/RegisterPasien";
import RegisterPsikiater from "../Register/RegisterPsikiater";

const RegisterRoute = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <RegisterPasien />
      </Route>
      <Route path={`${path}/psychiatrist`} exact>
        <RegisterPsikiater />
      </Route>
    </Switch>
  );
};

export default RegisterRoute;
