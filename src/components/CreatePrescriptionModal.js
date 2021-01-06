import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import appointmentAction from "../redux/actions/appointmentAction";

const CreatePrescriptionModal = ({ show, handleClose, appointment_id }) => {
  const [drugName, setDrugName] = useState("");
  const [methodName, setMethodName] = useState("");
  const [timeSequence, setTimeSequence] = useState([]);
  const dispatch = useDispatch();

  const submitPrescription = (e) => {
    e.preventDefault();
    dispatch(
      appointmentAction.createPrescription(
        appointment_id,
        drugName,
        methodName,
        timeSequence
      )
    );
    handleClose();
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Buat Resep Obat</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container">
          <Form>
            <Form.Group controlId="drugName">
              <Form.Label>Nama obat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan nama obat"
                value={drugName}
                onChange={(e) => setDrugName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="methodName">
              <Form.Label>Cara Pakai</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan cara pakai"
                value={methodName}
                onChange={(e) => setMethodName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="timeSequence">
              <Form.Label>Waktu Pakai</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan waktu pakai"
                value={timeSequence}
                onChange={(e) => setTimeSequence(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => submitPrescription(e)}
            >
              Buat Resep
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePrescriptionModal;
