import React, { useEffect, useState } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import API from "../API/mainServer";

const AppointmentCard = ({
  appointment,
  showPrescriptionModal,
  showReviewModal,
}) => {
  const [existedRating, setExistedRating] = useState({});

  const fetchReview = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: `/reviews/appointment/${appointment._id}`,
        headers: {
          accesstoken: token,
        },
      });

      console.log(response.data.data);
      setExistedRating(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchReview();
    },
    // eslint-disable-next-line
    []
  );

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
              <strong>Allergy: </strong>
              {`${appointment.allergy.map((a) => `${a}, `)}`}
            </h6>
            <h6
              style={{
                color: appointment.status === "Paid" ? "orange" : "green",
              }}
            >
              <strong style={{ color: "black" }}>Status: </strong>
              {`${appointment.status}`}
            </h6>
          </Col>
          <Col>
            <Row>
              <Col>
                <h6>
                  <strong>Prescription: </strong>
                  {!appointment.prescription_id ? (
                    "No prescription."
                  ) : (
                    <p
                      style={{ textDecorationLine: "underline", color: "blue" }}
                      onClick={(e) =>
                        showPrescriptionModal(appointment.prescription_id, e)
                      }
                    >
                      Open prescription
                    </p>
                  )}
                </h6>
                <h6>
                  <strong>Diagnose: </strong>
                  {appointment.diagnose.diagnose_name}
                </h6>
                {!existedRating?._id ? (
                  <h6>
                    <p
                      style={{ textDecorationLine: "underline", color: "blue" }}
                      onClick={(e) => showReviewModal(appointment, e)}
                    >
                      Rate this appointment
                    </p>
                  </h6>
                ) : (
                  <h6>
                    <strong>You rated: </strong>
                    <p>{existedRating?.rating?.$numberDecimal ?? 0}/5</p>
                  </h6>
                )}
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
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default AppointmentCard;
