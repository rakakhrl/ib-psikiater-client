import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutePsikiater from "./components/PrivateRoutePsikiater";
import PrivateRoutePasien from "./components/PrivateRoutePasien";

import RegisterPage from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PatientHistory from "./pages/PatientHistory/index";
import Search from "./pages/Search";
import Psikiater from "./pages/Psikiater";
import Checkout from "./pages/Checkout";
import Appointment from "./pages/Appointment";
import PublicProfilePsychiatrist from "./pages/PublicPsychiatristProfile";
import ProfilePatient from "./pages/ProfilePatient";
import PatientDashboard from "./pages/PatientDashboard";
import Chatbox from "./pages/Chatbox/index";
import EmailVerificationSent from "./pages/EmailVerificationSent";
import PaymentSlipUpload from "./pages/PaymentSlipUpload";
import AdminDashboard from "./pages/AdminDashboard";

const AppRoute = () => {
  return (
    <Switch>
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
        <RegisterPage />
      </Route>
      <Route path="/patient-history" exact>
        <PatientHistory />
      </Route>
      <Route path="/search-result" exact>
        <Search />
      </Route>
      <PrivateRoutePsikiater path="/psikiater-dashboard">
        <Psikiater />
      </PrivateRoutePsikiater>
      <Route path="/checkout-payment/:payment_id" exact>
        <Checkout />
      </Route>
       <Route path="/chatbox/:roomChat_id" >
        <Chatbox />
      </Route>
      <Route path="/profile/:psychiatrist_id" exact>
        <PublicProfilePsychiatrist />
      </Route>
      <Route path="/profile/me" exact>
        <ProfilePatient />
      </Route>
      <Route path="/patient-dashboard" exact>
        <PatientDashboard />
      </Route>
      <Route path="/email-verification-sent" exact>
        <EmailVerificationSent />
      </Route>
      <Route path="/upload-payment-slip/:payment_id" exact>
        <PaymentSlipUpload />
      </Route>
      <Route path="/admin-dashboard">
        <AdminDashboard />
      </Route>
    </Switch>
  );
};

export default AppRoute;
