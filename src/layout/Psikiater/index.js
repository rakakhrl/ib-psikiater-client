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
} from "reactstrap";
import Appbar from "../../components/Appbar";
import Tables from "../../components/Table/index"

const Index = () => {
  return (
    <>
      <Navbar style={{position: "sticky"}} fixed="top" color="#ed51b1;" light expand="lg">
        <Container>
          <NavbarBrand style={{color: 'yellow',}} href="/">Psikiater</NavbarBrand>
          <Nav className="mr-auto" navbar style={{ marginLeft: "68vw" }}>
            <NavItem>
              <NavLink  style={{color: 'yellow',}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'yellow',}}>About</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
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
