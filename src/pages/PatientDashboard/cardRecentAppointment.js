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
  Modal,
} from "react-bootstrap";
import Countdown from "react-countdown";
import API from "../../API/mainServer";
import StarRatings from "react-star-ratings";
import moment from "moment";
import ReviewPsikiaterModal from "./modalReview";
import ImagePasien from "../../assets/images/fauzihaqmuslim.jpg";
import "./index.css";
import { set } from "lodash";

const CardRecentAppointment = ({ appointmentDone, appointmentFetch }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [feedback, setFeedback] = useState(null);

  const fetchReviewPsikiater = async () => {
    try {
      const token = localStorage.getItem("accesstoken");
      const response = await API({
        method: "GET",
        url: `/reviews/appointment/${appointmentDone._id}`,
        headers: {
          accesstoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNDBiZmY4Y2IzZmEyMmY0MTRmZjk3Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MTEwNjI0NTF9.qOPkCYGApfxSfg8Cf1MN1BMwd3Kfiy_56cpXiMBG8ss",
        },
      });

      setFeedback(response.data.data);
      console.log(response.data.data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviewPsikiater();
    return fetchReviewPsikiater;
  }, [show]);

  const dateAppointment = appointmentDone?.appointment_date;
  const timeAppointment = appointmentDone?.appointment_time;
  const dateAppointmentFormatted = moment(dateAppointment).format(
    "dddd, DD-MMMM-YYYY"
  );
  const timeAppointmentFormatted = moment(timeAppointment).format();

  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Image
                className={"PhotoPsikiater"}
                src={appointmentDone.psikiater_id.avatar_url}
                style={{ width: "50px", height: "50px" }}
                alt="pasienPicture.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <Card.Text>{`${appointmentDone.psikiater_id.first_name} ${appointmentDone.psikiater_id.last_name}`}</Card.Text>
              <Card.Text className="">{`${dateAppointmentFormatted}`}</Card.Text>
              <Card.Text className="">{`${timeAppointment} WIB`}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Card.Text className="mt-3">
              {`${appointmentDone.psikiater_id.work_address}`}
            </Card.Text>
          </Row>
        </Card.Body>
        {!feedback ? (
          <div>
            <Card.Text>Not Rated Yet</Card.Text>
            <StarRatings
              rating={0}
              starRatedColor="gold"
              starDimension="30px"
              readOnly
            />
            <Button onClick={handleShow}>Create Review</Button>
          </div>
        ) : (
          <div>
            <StarRatings
              rating={Number(parseFloat(feedback?.rating?.$numberDecimal))}
              starRatedColor="gold"
              starDimension="30px"
              readOnly
            ></StarRatings>
            {/* {typeof Number(parseFloat(feedback.rating?.$numberDecimal))} */}
            <Card.Text>{`"${feedback.feedback}"`}</Card.Text>
          </div>
        )}
      </Card>
      <ReviewPsikiaterModal
        show={show}
        onHide={handleClose}
        appointmentDone={appointmentDone}
        appointmentFetch={appointmentFetch}
      />
    </>
  );
};

export default CardRecentAppointment;
