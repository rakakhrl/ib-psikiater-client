import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import RegisterRoute from "./RegisterRoute";
import "./index.css";
import registerUndraw from "./undraw_mobile_payments_vftl.svg";

const RegisterPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <Card className="register">
        <Row>
          <Col md={12} lg={6}>
            <Container className="tab-register">
              <Link to={`${url}`}>
                <Button className="register-patient-button">
                  Register as Patient
                </Button>
              </Link>
              <Link to={`${url}/psychiatrist`}>
                <Button className="register-psikiater-button">
                  Register as Psychiatrist
                </Button>
              </Link>
            </Container>
            <img className="register-undraw" src={registerUndraw}></img>
          </Col>
          <Col md={12} lg={6} className="scroll">
            <RegisterRoute path={path} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default RegisterPage;
