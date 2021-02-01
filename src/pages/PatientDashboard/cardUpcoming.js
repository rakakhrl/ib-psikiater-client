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
import Countdown from "react-countdown";
import API from "../../API/mainServer";
import StarRatings from "react-star-ratings";
import moment from "moment";
import ImagePasien from "../../assets/images/fauzihaqmuslim.jpg";
import "./index.css";

const CardUpcoming = ({ appointmentPaid }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [appointment, setAppointment] = useState();

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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataAppointment();
  }, []);

  const dateAppointment = appointmentPaid.appointment_date;
  const timeAppointment = appointmentPaid.appointment_time;
  const dateAppointmentFormatted = moment(dateAppointment).format(
    "dddd, DD-MMMM-YYYY"
  );
  const timeAppointmentFormatted = moment(timeAppointment).format();

  return (
    <>
      <Card border="primary" className="card-recent-appointment" mb-3>
        <Image
          variant="top"
          className="img-fluid mx-auto d-block mt-3"
          src={appointmentPaid.psikiater_id.avatar_url}
          style={{ width: "100px", height: "auto" }}
          alt="psikiaterPicture.jpg"
          roundedCircle
        />
        <hr></hr>
        <Card.Body>
          <Card.Title>{`${appointmentPaid.psikiater_id.first_name} ${appointmentPaid.psikiater_id.last_name}`}</Card.Title>
          <Card.Text className="">{`${dateAppointmentFormatted}`}</Card.Text>
          <Card.Text className="">{`${appointmentPaid.appointment_time} WIB`}</Card.Text>
          <Card.Text className="mt-3">
            {`${appointmentPaid.psikiater_id.work_address}`}
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </>
  );

  /* OLD>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
  /* <Card className="">
        <Card.Body>
          <Row>
            <Col className="col-4">
              <Image
                className={"PhotoPsikiater"}
             
                style={{ width: "50px", height: "50px" }}
                alt="psikiater_photo.jpg"
                roundedCircle
              />
            </Col>
            <Col className="col-8">
              <Card.Text></Card.Text>
             
            </Col>
          </Row>
          <Row>
            <Card.Text className="mt-3">{`${appointmentPaid.psikiater_id.work_address}`}</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </> */
};

export default CardUpcoming;
