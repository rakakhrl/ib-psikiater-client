import React from "react";
import { Modal, Row, Col, Image, Form, Container } from "react-bootstrap";
import moment from "moment";

const PsychiatristDetailModal = ({ show, handleClose, psychiatrist }) => {
  const currencyFormatter = require("currency-formatter");
  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detail Psychiatrist</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col>
            <Image
              height="150"
              width="150"
              src={psychiatrist.avatar_url}
              roundedCircle
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label style={{ marginTop: "20px", marginBottom: "20px" }}>
              Psychiatrist ID : {psychiatrist._id}
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={12}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="text-center"
              value={`${psychiatrist.first_name} ${psychiatrist.last_name} `}
            />
          </Col>
          <Col lg={5} sm={12}>
            <Form.Label>Psychiatrist Email</Form.Label>
            <Form.Control className="text-center" value={psychiatrist.email} />
          </Col>
          <Col lg={3} sm={12}>
            <Form.Label>Gender</Form.Label>
            <Form.Control className="text-center" value={psychiatrist.gender} />
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={12}>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              className="text-center"
              value={moment(psychiatrist.date_of_birth).format("DD-MM-YYYY")}
            />
          </Col>
          <Col lg={5} sm={12}>
            <Form.Label>Specialize In</Form.Label>
            <Form.Control
              className="text-center"
              value={psychiatrist.specialize}
            />
          </Col>
          <Col lg={3} sm={12}>
            <Form.Label>Experience Year</Form.Label>
            <Form.Control
              className="text-center"
              value={psychiatrist.info?.experience_year}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="3">
            <Form.Label>Region</Form.Label>
            <Form.Control
              className="text-center"
              value={psychiatrist.info?.region}
            />
          </Col>
          <Col>
            <Form.Label>Work Days</Form.Label>
            {psychiatrist.schedule?.work_days.map((d) => (
              <li>{d}</li>
            ))}
          </Col>
          <Col>
            <Form.Label>Work Times</Form.Label>
            {psychiatrist.schedule?.work_time.map((t) => (
              <li>{t}</li>
            ))}
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12}>
            <Form.Label>Work Address</Form.Label>
            <Form.Control as="textarea" value={psychiatrist.work_address} />
          </Col>
          <Col lg={6} sm={12}>
            <Form.Label>Fee</Form.Label>
            <Form.Control
              className="text-center"
              value={currencyFormatter.format(psychiatrist.fees, {
                code: "IDR",
              })}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12}>
            <Form.Label>Registered At</Form.Label>
            <Form.Control
              className="text-center"
              value={moment(psychiatrist.createdAt).format("DD-MM-YYYY")}
            />
          </Col>
          <Col lg={6} sm={12}>
            <Form.Label>Updated At</Form.Label>
            <Form.Control
              className="text-center"
              value={moment(psychiatrist.updatedAt).format("DD-MM-YYYY")}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PsychiatristDetailModal;
