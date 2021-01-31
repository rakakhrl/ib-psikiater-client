import React, { useState, useEffect } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Form,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Countdown from "react-countdown";
import API from "../../API/mainServer";
import StarRatings from "react-star-ratings";
import ImagePasien from "../../assets/images/fauzihaqmuslim.jpg";
import moment from "moment";
// import "./index.css";

const CardNextAppointment = ({ appointmentPaid }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [appointment, setAppointment] = useState();

  const history = useHistory();
  const role = useSelector((store) => store.user.role);
  console.log(appointmentPaid);
  const fetchDataAppointment = async () => {
    try {
      const token = localStorage.getItem("accesstoken");
      const response = await API({
        method: "GET",
        url: `/appointments/patient`,
        headers: {
          accesstoken: token,
        },
      });
      const statusDone = response.data.data.filter(
        (el) => el.status === "Done"
      );
      const statusPaid = response.data.data.filter(
        (el) => el.status === "Paid"
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataAppointment();
  }, []);
  console.log(appointmentPaid);
  const dateAppointment = appointmentPaid?.appointment_date;
  const timeAppointment = appointmentPaid?.appointment_time;
  const dateAppointmentFormatted = moment(dateAppointment).format("YYYY-MM-DD");
  console.log(dateAppointmentFormatted);
  const convertDateToSecond = new Date(
    `${dateAppointmentFormatted} ${timeAppointment}:00`
  ).getTime();
  const now = new Date().getTime();
  const newDate = convertDateToSecond - now;

  const handleButtonChatbox = () => {
    history.push(
      `/chatbox/${appointmentPaid.roomChat_id}/${appointmentPaid._id}`
    );
  };

  const TimeCountdown = () => (
    <Button onClick={handleButtonChatbox}>Start Now</Button>
  );

  return (
    <>
      <h5 className={"Judul"}>Your Next Appointment Starts In</h5>
      <Card>
        <Card.Body>
          <Row>
            <Col className={"col-8"}>
              <Card.Text style={{ fontSize: "2em" }}>
                {
                  <Countdown date={Date.now() + newDate}>
                    <TimeCountdown />
                  </Countdown>
                }
              </Card.Text>
              <Card.Text className="">{`${dateAppointmentFormatted}`}</Card.Text>
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
