import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { Form, Row, Col, Container, Button, Image } from "react-bootstrap";

const Index = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleBack = () => {
    history.goBack("/");
  };

  return (
    <Container style={{ margin: "0px" }}>
      <Row>
        <Col
        //   style={{
        //     backgroundImage: `url("https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80")`,
        //   }}
        ></Col>
        <Col style={{ padding: "2% 0%", marginLeft: "10%" }}>
          <p>
            <b onClick={handleBack} style={{ cursor: "pointer" }}>
              <ArrowLeft
                color="black"
                size={20}
                style={{ paddingRight: "5px" }}
              />
              Back
            </b>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
