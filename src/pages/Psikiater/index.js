import React from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "../../components/Sidebar/index";
import { useRouteMatch } from "react-router-dom";
import PsikiaterDashboardRoute from "./PsikiaterDashboardRoute";

const Index = () => {
  const { path, url } = useRouteMatch();

  return (
    <Row style={{ marginRight: "0px" }}>
      <Col lg={2} sm={12}>
        <SideBar url={url} />
      </Col>
      <Col lg={9} sm={12}>
        <PsikiaterDashboardRoute path={path} />
      </Col>
    </Row>
  );
};

export default Index;
