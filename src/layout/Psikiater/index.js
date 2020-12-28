import React from "react";
import {
  Row,
  Container,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "react-bootstrap";
import Appbar from "../../components/Appbar";
import Tables from "../../components/Table/index";
import AppbarHome from "../../components/Appbar/AppbarHome";

const Index = () => {
  return (
    <>
      <AppbarHome />
      <Row>
        <Col lg="2" sm="12">
          <Appbar />
        </Col>
        <Col lg="9" sm="12">
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Schedule</h1>
          <Tables />
        </Col>
      </Row>
    </>
  );
};

export default Index;
