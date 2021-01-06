import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import appointmentAction from "../redux/actions/appointmentAction";
import moment from "moment";

const AddDiagnoseModal = ({ show, handleClose, appointment_id }) => {
  const [diagnose, setDiagnose] = useState("");
  const dispatch = useDispatch();

  const submitDiagnose = (e) => {
    e.preventDefault();
    dispatch(
      appointmentAction.addDiagnosePatient(
        diagnose,
        moment(Date.now()).format("YYYY-MM-DD"),
        localStorage.getItem("accesstoken"),
        appointment_id
      )
    );
    handleClose();
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Buat Diagnosa</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container">
          <Form>
            <Form.Group controlId="diagnose">
              <Form.Label>Diagnosa</Form.Label>
              <Form.Control
                as="textarea"
                row={2}
                placeholder="Masukan Diagnosa"
                value={diagnose}
                onChange={(e) => setDiagnose(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => submitDiagnose(e)}
            >
              Buat Diagnosa
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddDiagnoseModal;
