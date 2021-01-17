import React from "react";
import { Switch, Route } from "react-router-dom";
// import PrivateRoutePsikiater from "./components/PrivateRoutePsikiater";
// import PrivateRoutePasien from "./components/PrivateRoutePasien";

// import RegisterPsikiater from "./pages/Register/RegisterPsikiater";
// import RegisterPasien from "./pages/Register/RegisterPasien";
import Register from "./pages/Register/index";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PatientHistory from "./pages/PatientHistory/index";
import Search from "./pages/Search";
import Psikiater from "./pages/Psikiater";
import Checkout from "./pages/Checkout/index";
import Appointment from "./pages/Appointment/index";
import Chatbox from "./pages/Chatbox/index";
import PatientDashboard from "./pages/PatientDashboard/index";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/chatbox">
        <Chatbox />
      </Route>
      <Route path="/patient-dashboard">
        <PatientDashboard />
      </Route>
      <Route path="/appointment/:psikiater_id" exact>
        <Appointment />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/patient-history" exact>
        <PatientHistory />
      </Route>
      <Route path="/search-result" exact>
        <Search />
      </Route>
      <Route path="/psikiater-dashboard" exact>
        <Psikiater />
      </Route>
      <Route path="/checkout-payment/:appointment_id" exact>
        <Checkout />
      </Route>
    </Switch>
  );
};

export default AppRoute;
