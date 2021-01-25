import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import AdminDashboardRoute from "./AdminDashboardRoute";

const AdminDashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Row style={{ height: "91.5vh", maxWidth: "100vw" }}>
        <Col md={2} className="bg-primary">
          <Nav className="flex-column pt-2">
            <Nav.Item className="p-2">
              <Link className="text-white" to={`${url}`}>
                Payment
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link className="text-white" to={`${url}/psychiatrist-approval`}>
                Psychiatrist
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link className="text-white" to={`${url}/list-users`}>
                Users
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={10}>
          <AdminDashboardRoute path={path} />
        </Col>
      </Row>
    </>
  );
};

export default AdminDashboard;
