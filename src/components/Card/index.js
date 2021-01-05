import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import moment from "moment";

const Index = ({ appointment }) => {
  return (
    <Container style={{ backgroundColor: "#ededed", padding: "20px" }}>
      <Container key={appointment.appointment_id}>
        <Row>
          <Col xs="12" lg="3" md="12" className="d-none d-md-block">
            <img
              src={appointment.patient_id.avatar_url}
              alt="images"
              style={{ width: "200px", borderRadius: "100px" }}
            />
          </Col>

          <Col xs="12" lg="6" md="12">
            <h2 className="title">
              {appointment.patient_id.first_name}
              {appointment.patient_id.last_name}
            </h2>
            <p>
              Age:
              {new Date().getYear() -
                new Date(appointment.patient_id.date_of_birth).getYear()}
            </p>
            <p>{appointment.patient_id.gender}</p>
            <p>{appointment.patient_id.email}</p>
            <p>{appointment.patient_id.address}</p>
          </Col>
          <Col xs="12" lg="3" md="12">
            <h6 className="title">
              Diagnose: {appointment.diagnose.diagnose_name}
            </h6>
            <h6 className="title">
              Allergy: {appointment.allergy.map((a) => `${a}, `)}
            </h6>
            <h6 className="title">
              Date: {moment(appointment.appointment_date).format("YYYY-MM-DD")}
            </h6>
            <h6 className="title">Time: {appointment.appointment_time}</h6>
            <h6 className="title">Status: {appointment.status}</h6>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="12" md="12">
            <h6 className="title">Complaints : </h6>
            <p>{appointment.complaint}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Index;
