import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutePsikiater from "./components/PrivateRoutePsikiater";
import PrivateRoutePasien from "./components/PrivateRoutePasien";

import RegisterPsikiater from "./pages/RegisterPsikiater";
import RegisterPasien from "./pages/RegisterPasien";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Psikiater from "./pages/Psikiater";
import PatientHistory from "./pages/PatientHistory/index";

const AppRoute = () => {
  return (
    <Switch>
      <PrivateRoutePsikiater path="/psikiater" exact>
        <Psikiater />
      </PrivateRoutePsikiater>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/registerPsikiater" exact>
        <RegisterPsikiater />
      </Route>
      <Route path="/registerPasien" exact>
        <RegisterPasien />
      </Route>
      <PrivateRoutePasien path="/patient-history" exact>
        <PatientHistory />
      </PrivateRoutePasien>
    </Switch>
  );
};

export default AppRoute;
