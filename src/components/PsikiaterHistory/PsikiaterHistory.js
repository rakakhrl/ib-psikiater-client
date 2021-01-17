import React, { useEffect, useState } from "react";
import "./PsikiaterHistory.css";
import moment from "moment";
import PsikiaterHistoryModal from "./PsikiaterHistoryModal";
import { Card, Container, Button, Modal } from "react-bootstrap";

const PsikiaterHistory = ({ appointment }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card className="card-wrapper">
        <Card.Img
          variant="top"
          src={
            appointment.patient_id.avatar_url === ""
              ? "../images/dummy_photo.jpg"
              : appointment.patient_id.avatar_url
          }
        />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{`${appointment.patient_id.first_name} ${appointment.patient_id.last_name}`}</Card.Title>
          <Card.Text className="card-text-1">{` Date : ${moment(
            appointment.appointment_date
          ).format("DD MMM YYYY")}`}</Card.Text>
          <Card.Text className="card-text-2">{` Status : ${appointment.status}`}</Card.Text>
          <Container className="button-wrapper">
            <Button
              onClick={() => setModalShow(true)}
              className="button-detail"
              variant="outline-primary"
            >
              Patient Detail
            </Button>
          </Container>
        </Card.Body>
      </Card>
      <PsikiaterHistoryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        appointment={appointment}
      />
    </>
  );
};

export default PsikiaterHistory;
