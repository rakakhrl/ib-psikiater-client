import React from "react";
import { Row, Col } from "react-bootstrap";
import SidebarRegister from "../../components/SidebarRegister/index";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Register from "./Register";
import RegisterPsikiater from "./RegisterPsikiater";
import RegisterPasien from "./RegisterPasien";

const Index = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <ul>
        <li>
          <Link to={`${url}`}>Register as Psikiater</Link>
        </li>
        <li>
          <Link to={`${url}/registerPasien`}>Register as Patient</Link>
        </li>
      </ul>
      <Row style={{ marginRight: "0px" }}>
        <Col lg="2" sm="12">
          <SidebarRegister />
        </Col>
      </Row>
      <Switch>
        <Route exact path={`${path}`}>
          <RegisterPsikiater />
        </Route>
        <Route exact path={`${path}/registerPasien`}>
          <RegisterPasien />
        </Route>
      </Switch>
    </>
  );
};

export default Index;
