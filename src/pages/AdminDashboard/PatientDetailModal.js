import React from "react";
import { Modal, Row, Col, Image, Form } from "react-bootstrap";
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
          <Col>
            <Form.Label style={{ marginTop: "15px" }}>
              Patient ID : {patient._id}
            </Form.Label>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <Form.Label>Patient Name </Form.Label>
            <Form.Control
              className="text-center"
              value={`${patient.first_name} ${patient.last_name}`}
            />
          </Col>
          <Col>
            <Form.Label>Gender</Form.Label>
            <Form.Control className="text-center" value={patient.gender} />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              className="text-center"
              value={moment(patient.date_of_birth).format("DD-MM-YYYY")}
            />
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control className="text-center" value={patient.email} />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" value={patient.address} />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <Form.Label>Registered At</Form.Label>
            <Form.Control
              className="text-center"
              value={moment(patient.createdAt).format("DD-MM-YYYY")}
            />
          </Col>
          <Col>
            <Form.Label>Updated At</Form.Label>
            <Form.Control
              className="text-center"
              value={moment(patient.updatedAt).format("DD-MM-YYYY")}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PatientDetailModal;
