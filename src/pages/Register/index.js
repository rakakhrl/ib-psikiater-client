import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import RegisterRoute from "./RegisterRoute";

const RegisterPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container style={{ margin: "0px" }}>
      <Link to={`${url}`}>Register as patient</Link>
      <Link to={`${url}/psychiatrist`}>Register as psychiatrist</Link>
      <Row>
        <Col
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80")`,
          }}
        />
        <Col style={{ padding: "1% 0%", marginLeft: "10%" }}>
          <RegisterRoute path={path} />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
