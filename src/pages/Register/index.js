import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Card} from "react-bootstrap";
import RegisterRoute from "./RegisterRoute";
import "./index.css";
import registerUndraw from "./undraw_mobile_payments_vftl.svg";

const RegisterPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container style={{ margin: "0px" }}>
     
      <Card className="register">
        <Row>
        <Col md={12} lg={6}>
        <Link to={`${url}`} className="tab-register">Register as Patient</Link>
        <Link to={`${url}/psychiatrist`} className="tab-register">Register as Pychiatrist</Link>
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
