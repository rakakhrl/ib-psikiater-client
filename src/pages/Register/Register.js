import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import RegisterPsikiater from "./RegisterPsikiater";
import RegisterPasien from "./RegisterPasien";

const Register = ({ path }) => {
  return (
    <Switch>
      <Route exact path={`${path}/registerPsikiater`}>
        <RegisterPsikiater />
      </Route>
      <Route path={`${path}/registerPasien`}>
        <RegisterPasien />
      </Route>
    </Switch>
  );
};

export default Register;
