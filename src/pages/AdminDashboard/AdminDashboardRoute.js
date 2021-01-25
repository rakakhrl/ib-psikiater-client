import React from "react";
import { Switch, Route } from "react-router-dom";
import PaymentApproval from "./PaymentApproval";
import PsychiatristApproval from "./PsychiatristApproval";
import UsersList from "./UsersList";

const AdminDashboardRoute = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <PaymentApproval />
      </Route>
      <Route path={`${path}/psychiatrist-approval`} exact>
        <PsychiatristApproval />
      </Route>
      <Route path={`${path}/list-users`} exact>
        <UsersList />
      </Route>
    </Switch>
  );
};

export default AdminDashboardRoute;
