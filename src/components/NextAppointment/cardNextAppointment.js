import React from "react";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Countdown from "react-countdown";
import moment from "moment";

const CardNextAppointment = ({ appointmentPaid }) => {
  const history = useHistory();
  const role = useSelector((store) => store.user.role);

  const dateAppointment = appointmentPaid?.appointment_date;
  const timeAppointment = appointmentPaid?.appointment_time;
  const dateAppointmentFormatted = moment(dateAppointment).format("YYYY-MM-DD");
  const convertDateToSecond = new Date(
    `${dateAppointmentFormatted} ${timeAppointment}:00`
  ).getTime();
  const now = new Date().getTime();
  const newDate = convertDateToSecond - now;
  const countdownTime = Date.now() + newDate;

  const handleButtonChatbox = () => {
    history.push(
      `/chatbox/${appointmentPaid.roomChat_id}/${appointmentPaid._id}`
    );
  };

  const CountdownComplete = () => (
    <Button onClick={handleButtonChatbox}>Start Now</Button>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <CountdownComplete />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <>
      <h5 className="Judul">Your Next Appointment Starts In</h5>
      <Card>
        <Card.Body>
          <Row>
            <Col className={"col-8"}>
              <Card.Text style={{ fontSize: "2em" }}>
                {countdownTime ? (
                  <Countdown date={countdownTime} renderer={renderer} />
                ) : null}
              </Card.Text>
              <Card.Text className="">{`${dateAppointmentFormatted} ${timeAppointment}`}</Card.Text>
              <Card.Text>Online Appointment</Card.Text>
            </Col>
            {role === "PATIENT" ? (
              <Col className={"col-4"}>
                <Image
                  className={"PhotoPsikiater"}
                  src={`${appointmentPaid?.psikiater_id?.avatar_url}`}
                  style={{ width: "75px", height: "75px" }}
                  alt="psikiater_photo.jpg"
                  roundedCircle
                />
                <Card.Text
                  style={{ marginLeft: "10px" }}
                >{`${appointmentPaid?.psikiater_id?.first_name} ${appointmentPaid?.psikiater_id?.last_name} `}</Card.Text>
              </Col>
            ) : (
              <Col className={"col-4"}>
                <Image
                  className={"PhotoPasien"}
                  src={`${appointmentPaid?.patient_id?.avatar_url}`}
                  style={{ width: "75px", height: "75px" }}
                  alt="patient_photo.jpg"
                  roundedCircle
                />
                <Card.Text
                  style={{ marginLeft: "10px" }}
                >{`${appointmentPaid?.patient_id?.first_name} ${appointmentPaid?.patient_id?.last_name} `}</Card.Text>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardNextAppointment;
