import React from "react";
import { Modal, Row } from "react-bootstrap";

const PrescriptionModal = ({ show, handleClose, prescription }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Prescription</Modal.Title>
      </Modal.Header>

      {!prescription.drugs ? (
        <Modal.Body>
          <div className="container">
            <Row>
              <h5>
                <strong>Drug Name: </strong> -
              </h5>
            </Row>
            <Row>
              <h5>
                <strong>How to consume: </strong> -
              </h5>
            </Row>
            <Row>
              <h5>
                <strong>When to consume: </strong> -
              </h5>
            </Row>
          </div>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <div className="container">
            <Row>
              <h5>
                <strong>Drug Name: </strong>
                {prescription.drugs.drug_name}
              </h5>
            </Row>
            <Row>
              <h5>
                <strong>How to consume: </strong>
                {prescription.drugs.consume_method.method_name}
              </h5>
            </Row>
            <Row>
              <h5>
                <strong>When to consume: </strong>
                {prescription.drugs.consume_method.time_sequence.map(
                  (t) => `${t}, `
                )}
              </h5>
            </Row>
          </div>
        </Modal.Body>
      )}
    </Modal>
  );
};

export default PrescriptionModal;
