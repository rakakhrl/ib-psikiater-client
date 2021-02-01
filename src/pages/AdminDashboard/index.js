import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Row, Col, Nav, Button } from "react-bootstrap";
import AdminDashboardRoute from "./AdminDashboardRoute";
import { logout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const AdminDashboard = () => {
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  return (
    <>
      <Row style={{ height: "93vh", maxWidth: "100vw" }}>
        <Col md={2} style={{ background: "#7d9dec " }}>
          <Nav className="flex-column justify-content-between pt-2 h-100">
            <div>
              <Nav.Item className="p-2">
                <Link className="text-white" to={`${url}`}>
                  Payment Verification
                </Link>
              </Nav.Item>
              <Nav.Item className="p-2">
                <Link
                  className="text-white"
                  to={`${url}/psychiatrist-approval`}
                >
                  Psychiatrist Approval
                </Link>
              </Nav.Item>
              <Nav.Item className="p-2">
                <Link className="text-white" to={`${url}/list-users`}>
                  Users List
                </Link>
              </Nav.Item>
            </div>
            <div>
              <Nav.Item className="p-2">
                <Button onClick={() => dispatch(logout())} variant="danger">
                  Sign Out
                </Button>
              </Nav.Item>
            </div>
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
