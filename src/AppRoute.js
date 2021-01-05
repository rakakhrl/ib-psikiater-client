import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutePsikiater from "./components/PrivateRoutePsikiater";
import PrivateRoutePasien from "./components/PrivateRoutePasien";

import RegisterPsikiater from "./pages/RegisterPsikiater";
import RegisterPasien from "./pages/RegisterPasien";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PatientHistory from "./pages/PatientHistory/index";
import Search from "./pages/Search";
import Psikiater from "./pages/Psikiater";
import Checkout from "./pages/Checkout/index";

const AppRoute = () => {
  return (
    <Switch>
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
      <PrivateRoutePasien path="/search-result" exact>
        <Search />
      </PrivateRoutePasien>
      <PrivateRoutePsikiater path="/psikiater-dashboard" exact>
        <Psikiater />
      </PrivateRoutePsikiater>
      <Route path="/checkout-payment/:appointment_id" exact>
        <Checkout />
      </Route>
    </Switch>
  );
};

export default AppRoute;
