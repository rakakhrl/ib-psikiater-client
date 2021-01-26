import React from "react";
import { Modal, Row, Col, Image } from "react-bootstrap";
import moment from "moment";

const PsychiatristDetailModal = ({ show, handleClose, psychiatrist }) => {
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
          <Col className="text-left">Psychiatrist ID:</Col>
          <Col className="text-left">{psychiatrist._id}</Col>
        </Row>
        <Row>
          <Col className="text-left">Psychiatrist First Name:</Col>
          <Col className="text-left">{psychiatrist.first_name}</Col>
        </Row>
        <Row>
          <Col className="text-left">Psychiatrist Last Name:</Col>
          <Col className="text-left">{psychiatrist.last_name}</Col>
        </Row>
        <Row>
          <Col className="text-left">Psychiatrist Email:</Col>
          <Col className="text-left">{psychiatrist.email}</Col>
        </Row>
        <Row>
          <Col className="text-left">Date of birth:</Col>
          <Col className="text-left">
            {moment(psychiatrist.date_of_birth).format("DD-MM-YYYY")}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Gender:</Col>
          <Col className="text-left">{psychiatrist.gender}</Col>
        </Row>
        <Row>
          <Col className="text-left">Experience Year:</Col>
          <Col className="text-left">{psychiatrist.info?.experience_year}</Col>
        </Row>
        <Row>
          <Col className="text-left">Specialize in:</Col>
          <Col className="text-left">{psychiatrist.specialize}</Col>
        </Row>
        <Row>
          <Col className="text-left">Region:</Col>
          <Col className="text-left">{psychiatrist.info?.region}</Col>
        </Row>
        <Row>
          <Col className="text-left">Work Days:</Col>
          <Col className="text-left">
            {psychiatrist.schedule?.work_days.map((d) => (
              <Row>{d}</Row>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Work Time:</Col>
          <Col className="text-left">
            {psychiatrist.schedule?.work_time.map((t) => (
              <Row>{t}</Row>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Work Address:</Col>
          <Col className="text-left">{psychiatrist.work_address}</Col>
        </Row>
        <Row>
          <Col className="text-left">Fee:</Col>
          <Col className="text-left">{psychiatrist.fees}</Col>
        </Row>
        <Row>
          <Col className="text-left">Registered At:</Col>
          <Col className="text-left">
            {moment(psychiatrist.createdAt).format("DD-MM-YYYY")}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Updated At:</Col>
          <Col className="text-left">
            {moment(psychiatrist.updatedAt).format("DD-MM-YYYY")}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PsychiatristDetailModal;
