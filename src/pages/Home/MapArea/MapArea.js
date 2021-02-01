import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./MapArea.css";
import MapLogo from "./MapLogo.svg";

function MapArea() {
  return (
    <div>
      <Container id="map-area-wrapper">
        <Row>
          <Col lg={6} md={12} id="map-column">
            <h1 id="text-map-area">Find Psychiatrist At Jabodetabek</h1>
          </Col>
          <Col lg={6} md={12} id="map-column">
            <img className="map-image" src={MapLogo}></img>
          </Col>
        </Row>
        <hr className="hr-map-area" />
      </Container>
    </div>
  );
}
export default MapArea;
