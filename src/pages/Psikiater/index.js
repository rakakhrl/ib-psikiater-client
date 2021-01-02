import React from "react";
import {
  Row,
  Col,
} from "react-bootstrap";
import SideBar from "../../components/Sidebar/index";
import Navbar from "../../components/Navbar/AppbarHome";
import Tables from "../../components/Table/index";


const Index = () => {
  return (
    <>
      <Navbar />
      <Row style={{marginRight:"0px"}}>
        <Col lg="2" sm="12">
          <SideBar />
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
