import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Modal,
  Alert,
} from "react-bootstrap";
import Countdown from "react-countdown";
import API from "../../API/mainServer";
import StarRatings from "react-star-ratings";
import moment from "moment";
import ReviewPsikiaterModal from "./modalReview";
import ImagePasien from "../../assets/images/fauzihaqmuslim.jpg";
import "./index.css";
import { set } from "lodash";
import { useHistory } from "react-router-dom";

const CardRecentAppointment = ({ appointmentDone, appointmentFetch }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [roomChat_id, setRoomChatId] = useState();
  const [appointment_id, setAppointment_id] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
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
  console.log(roomChat_id);
  console.log(appointment_id);
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
    <>
      <Card className="space-card">
        <Row>
          <Col>
            <Card.Body>
              <Image
                className={"PhotoPsikiater"}
                src={appointmentDone.psikiater_id.avatar_url}
                style={{ width: "190px", height: "90px" }}
                alt="pasienPicture.jpg"
                roundedCircle
              />
            </Card.Body>
          </Col>
          <Col>
            <Card.Text>{`${appointmentDone.psikiater_id.first_name} ${appointmentDone.psikiater_id.last_name}`}</Card.Text>
            <Card.Text className="">{`${dateAppointmentFormatted}`}</Card.Text>
            <Card.Text className="">{`${timeAppointment} WIB`}</Card.Text>
          </Col>
          <Col>
            <Card.Text className="mt-3">
              {`${appointmentDone.psikiater_id.work_address}`}
            </Card.Text>
          </Col>
          <Col>
            {!feedback ? (
              <div>
                <Alert variant="danger">
                  <p>Not rated yet</p>
                </Alert>
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
                <Button onClick={seeHistoryChat}>History Chat</Button>
              </div>
            )}
          </Col>
          <Col>
            <ReviewPsikiaterModal
              show={show}
              onHide={handleClose}
              appointmentDone={appointmentDone}
              appointmentFetch={appointmentFetch}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardRecentAppointment;

// <Card>
//         <Card.Body>
//           <Row>
//             <Col lg={4}>
//               <Image
//                 className={"PhotoPsikiater"}
//                 src={appointmentDone.psikiater_id.avatar_url}
//                 style={{ width: "190px", height: "90px" }}
//                 alt="pasienPicture.jpg"
//                 roundedCircle
//               />
//             </Col>
//             <Col lg={4}>
//               <Card.Text>{`${appointmentDone.psikiater_id.first_name} ${appointmentDone.psikiater_id.last_name}`}</Card.Text>
//               <Card.Text className="">{`${dateAppointmentFormatted}`}</Card.Text>
//               <Card.Text className="">{`${timeAppointment} WIB`}</Card.Text>
//             </Col>
//             <Card.Text className="mt-3">
//               {`${appointmentDone.psikiater_id.work_address}`}
//             </Card.Text>
//           </Row>
//         </Card.Body>
//         {!feedback ? (
//           <div>
//             <Card.Text>Not Rated Yet</Card.Text>
//             <StarRatings
//               rating={0}
//               starRatedColor="gold"
//               starDimension="30px"
//               readOnly
//             />
//             <Button onClick={handleShow}>Create Review</Button>
//           </div>
//         ) : (
//           <div>
//             <StarRatings
//               rating={Number(parseFloat(feedback?.rating?.$numberDecimal))}
//               starRatedColor="gold"
//               starDimension="30px"
//               readOnly
//             ></StarRatings>
//             {/* {typeof Number(parseFloat(feedback.rating?.$numberDecimal))} */}
//             <Card.Text>{`"${feedback.feedback}"`}</Card.Text>
//           </div>
//         )}
//       </Card>
//       <ReviewPsikiaterModal
//         show={show}
//         onHide={handleClose}
//         appointmentDone={appointmentDone}
//         appointmentFetch={appointmentFetch}
//       />
