import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.scss";
import moment from "moment";

const Index = ({ appointment }) => {
  return (
    <Container
      style={{
        backgroundColor: "#ededed",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <Container key={appointment.appointment_id}>
        <Row>
          <Col xs="3" lg="3" md="12" className="d-none d-md-block">
            <Image
              src={
                appointment.patient_id.avatar_url === ""
                  ? "../../images/pic04.jpg"
                  : appointment.patient_id.avatar_url
              }
              alt="images"
              roundedCircle
              style={{ width: "200px" }}
            />
          </Col>

          <Col xs="6" lg="6" md="12">
            <h5 className="">
              {appointment.patient_id.first_name} {""}
              {appointment.patient_id.last_name}
            </h5>
            <p>
              Age:
              {new Date().getYear() -
                new Date(appointment.patient_id.date_of_birth).getYear()}
            </p>
            <p>
              Gender: {""}
              {appointment.patient_id.gender}
            </p>
            <p>
              Email: {""} {appointment.patient_id.email}
            </p>
            <p>
              Address: {""} {appointment.patient_id.address}
            </p>
          </Col>
          <Col xs="3" lg="3" md="12">
            <h6 className="">Diagnose: {appointment.diagnose.diagnose_name}</h6>
            <h6 className="">Allergy: {appointment.allergy}</h6>
            <h6 className="">
              Date: {moment(appointment.appointment_date).format("YYYY-MM-DD")}
            </h6>
            <h6 className="">Time: {appointment.appointment_time}</h6>
            <h6 className="">Status: {appointment.status}</h6>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="9" md="12">
            <h6 className="">Complaints : </h6>
            <p>{appointment.complaint}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Index;
