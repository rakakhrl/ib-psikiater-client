import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "./serenity.svg";
import "./Jumbotron.css";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

function Jumbo() {
  const [regionInput, setRegionInput] = useState("");
  const [psikiaterInput, setPsikiaterInput] = useState("");

  const history = useHistory();

  const tryButton = () => {
    history.push("search-result", {
      name: psikiaterInput,
      region: regionInput,
    });
    setRegionInput("");
    setPsikiaterInput("");
  };

  return (
    <div>
      <Container>
        <Row className="row-jumbotron">
          <Col className="left-column" sm={12} lg={6}>
            <img src={logo} className="jumbotron-logo" alt="logo"></img>
          </Col>
          <Col id="text" className="rigt-column" sm={12} lg={6}>
            <h1 className="jumbotron-title">
              Mental Health Application <br />
              No 1 in Indonesia
            </h1>
            <p className="jumbotron-paragraf">
              Get complete solutions and services to care for and maintain your
              mental health. Living mentally healthy and happy is just one step
              away!
            </p>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    onChange={(e) => setPsikiaterInput(e.target.value)}
                    value={psikiaterInput}
                    placeholder="Search Psychiatrist"
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    onChange={(e) => {
                      setRegionInput(e.target.value);
                    }}
                    value={regionInput}
                    as="select"
                  >
                    <option>Region</option>
                    <option>Jakarta</option>
                    <option>Bogor</option>
                    <option>Depok</option>
                    <option>Tangerang</option>
                    <option>Bekasi</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </Form>
            <div id="button-wrapper">
              <Button
                onClick={tryButton}
                className="button-search"
                variant="primary"
              >
                <span>Try It Now</span>
              </Button>
            </div>
          </Col>
        </Row>
        <hr id="horizontal-rule-jumbotron" />
      </Container>
    </div>
  );
}
export default Jumbo;
