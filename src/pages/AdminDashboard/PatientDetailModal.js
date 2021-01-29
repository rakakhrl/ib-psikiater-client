import React from "react";
import { Modal, Row, Col, Image } from "react-bootstrap";
import moment from "moment";

const PatientDetailModal = ({ show, handleClose, patient }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detail Patient</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col>
            <Image
              height="150"
              width="150"
              src={patient.avatar_url}
              roundedCircle
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Patient ID:</Col>
          <Col className="text-left">{patient._id}</Col>
        </Row>
        <Row>
          <Col className="text-left">Patient First Name:</Col>
          <Col className="text-left">{patient.first_name}</Col>
        </Row>
        <Row>
          <Col className="text-left">Patient Last Name:</Col>
          <Col className="text-left">{patient.last_name}</Col>
        </Row>
        <Row>
          <Col className="text-left">Patient Email:</Col>
          <Col className="text-left">{patient.email}</Col>
        </Row>
        <Row>
          <Col className="text-left">Date of birth:</Col>
          <Col className="text-left">
            {moment(patient.date_of_birth).format("DD-MM-YYYY")}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Gender:</Col>
          <Col className="text-left">{patient.gender}</Col>
        </Row>
        <Row>
          <Col className="text-left">Address:</Col>
          <Col className="text-left">{patient.address}</Col>
        </Row>
        <Row>
          <Col className="text-left">Registered At:</Col>
          <Col className="text-left">
            {moment(patient.createdAt).format("DD-MM-YYYY")}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Updated At:</Col>
          <Col className="text-left">
            {moment(patient.updatedAt).format("DD-MM-YYYY")}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PatientDetailModal;
