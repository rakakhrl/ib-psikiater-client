import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

const AppointmentCard = ({ appointment, showModal }) => {
  return (
    <Card body className="mb-4">
      <div className="container">
        <Row>
          <Col>
            <h5>{`${appointment.psikiater_id.first_name} ${appointment.psikiater_id.last_name}`}</h5>
            <h6>
              <strong>Address: </strong>
              {`${appointment.psikiater_id.work_address}`}
            </h6>
            <h6>
              <strong>Region: </strong>
              {`${appointment.psikiater_id.info.region}`}
            </h6>
          </Col>
          <Col>
            <h6>
              <strong>Appointment Date: </strong>
              {`${new Date(appointment.appointment_date).toDateString()}`}
            </h6>
            <h6>
              <strong>Appointment Time: </strong>
              {`${appointment.appointment_time}`}
            </h6>
            <h6>
              <strong>Prescription: </strong>
              {!appointment.prescription_id ? (
                "No prescription."
              ) : (
                <a
                  href=""
                  onClick={(e) => showModal(appointment.prescription_id, e)}
                >
                  Open prescription
                </a>
              )}
            </h6>
          </Col>
          <Col style={{ textAlign: "end" }}>
            <Image
              height="100"
              width="100"
              src={appointment.psikiater_id.avatar_url}
              roundedCircle
            />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default AppointmentCard;
