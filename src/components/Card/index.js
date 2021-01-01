import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { Doctor } from "../../pages/Search/Data";

const index = ({user}) => {
  return (
    <Container style={{ backgroundColor: "#ededed", padding: "20px" }}>
      {Doctor.filter((item) => {
        if (item._id === 2) {
          return item;
        } else {
          return null;
        }
      }).map((item) => {
        return (
          <Container key={item.patient.id}>
            <Row>
              <Col xs="12" lg="3" md="12" className="d-none d-md-block">
                <img
                  src={item.patient.image}
                  alt="images"
                  style={{ width: "200px", borderRadius: "100px" }}
                />
              </Col>

              <Col xs="12" lg="6" md="12">
                <h2 className="title">{user}</h2>
                <p>Age: {2020 - item.patient.birthDate}</p>
                <p>{item.patient.gender}</p>
                <p>{item.patient.email}</p>
                <p>{item.patient.address}</p>
              </Col>
              <Col xs="12" lg="3" md="12">
                <h6 className="title">Diagnose: {item.patient.diagnose}</h6>
                <h6 className="title">Allergy: {item.patient.allergy}</h6>
                <h6 className="title">Time: {item.patient.Time}</h6>
                <h6 className="title">Date: {item.patient.date}</h6>
                <h6 className="title">StatusPaid: {item.patient.statusPaid}</h6>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col xs="12" md="12">
                <h6 className="title">Complaints : </h6>
                <p>{item.patient.complaints}</p>
              </Col>
            </Row>
          </Container>
        );
      })}
    </Container>
  );
};

export default index;
