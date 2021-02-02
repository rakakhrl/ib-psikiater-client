import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  Alert,
  CardDeck,
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
  const [roomChat_id, setRoomChatId] = useState();
  const [appointment_id, setAppointment_id] = useState();
  const history = useHistory();

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
          accesstoken: token,
        },
      });

      setFeedback(response.data.data);
      setIsLoading(true);
      setRoomChatId(response.data.data.appointment_id.roomChat_id);
      setAppointment_id(response.data.data.appointment_id._id);
    } catch (error) {
      console.log(error);
    }
  };
  // Akses history chat
  const seeHistoryChat = () => {
    history.push(`/chatbox/${roomChat_id}/${appointment_id}`);
  };

  useEffect(() => {
    fetchReviewPsikiater();

    return fetchReviewPsikiater;
  }, [show]);

  const dateAppointment = appointmentDone.appointment_date;
  const timeAppointment = appointmentDone.appointment_time;
  const dateAppointmentFormatted = moment(dateAppointment).format(
    "dddd, DD-MMMM-YYYY"
  );
  const timeAppointmentFormatted = moment(timeAppointment).format();

  return (
    <Card border="success" className="card-recent-appointment">
      <Image
        variant="top"
        className="img-fluid mx-auto d-block mt-3"
        src={appointmentDone.psikiater_id.avatar_url}
        style={{ width: "100px", height: "auto" }}
        alt="pasienPicture.jpg"
        roundedCircle
      />
      <hr></hr>
      <Card.Body>
        <Card.Title>{`${appointmentDone.psikiater_id.first_name} ${appointmentDone.psikiater_id.last_name}`}</Card.Title>
        <Card.Text className="">{`${dateAppointmentFormatted}`}</Card.Text>
        <Card.Text className="">{`${timeAppointment} WIB`}</Card.Text>
        <Card.Text className="mt-3">
          {`${appointmentDone.psikiater_id.work_address}`}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          {" "}
          {!feedback ? (
            <div>
              <Alert variant="danger" size="md">
                <p className="text-center">Not rated yet</p>
              </Alert>
              {/* 
                  <StarRatings
                    rating={0}
                    starRatedColor="gold"
                    starDimension="30px"
                    readOnly
                  /> */}
              <Button onClick={handleShow} className=" mx-auto d-block">
                Create Review
              </Button>
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
              <Card.Text className="font-italic text-center mt-3">{`"${feedback.feedback}"`}</Card.Text>
              <Button onClick={seeHistoryChat} className=" mx-auto d-block">
                History Chat
              </Button>
            </div>
          )}
          <ReviewPsikiaterModal
            show={show}
            onHide={handleClose}
            appointmentDone={appointmentDone}
            appointmentFetch={appointmentFetch}
          />
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default CardRecentAppointment;
