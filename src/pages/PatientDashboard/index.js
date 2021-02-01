import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Alert } from "react-bootstrap";
import Countdown from "react-countdown";
import API from "../../API/mainServer";
import CardUpcoming from "./cardUpcoming";
import CardNextAppointment from "../../components/NextAppointment/cardNextAppointment";
import CardRecentAppointment from "./cardRecentAppointment";
import PendingPayments from "../../components/PendingPayments/index";
import "./index.css";

const PatientDashboard = () => {
  const [appointmentDone, setAppointmentDone] = useState([]);
  const [appointmentPaid, setAppointmentPaid] = useState([]);
  const [pendingPayment, setPendingPayment] = useState([]);
  const store = useSelector((state) => state.user.user_data);
  const patient_id = store._id;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      setAppointmentDone(statusDone);
      setAppointmentPaid(statusPaid);
    } catch (error) {
      console.log(error);
    }
  };

  const getPendingPaymentData = async () => {
    try {
      const response = await API({
        method: "GET",
        url: `/payments/pending/${patient_id}`,
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      setPendingPayment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchDataAppointment();
      return fetchDataAppointment;
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    if (patient_id) {
      getPendingPaymentData();
    }

    return getPendingPaymentData;
  }, [patient_id]);

  return (
    <>
      {/* Your Next appointment */}
      {/* <Container
        className="pt-3"
        style={{ height: "150px", width: "350px", paddingTop: "10" }}
      >
        {!appointmentPaid ? (
          <h3>You Dont Have Any Appointment Schedule</h3>
        ) : (
          <CardNextAppointment appointmentPaid={appointmentPaid[0]} />
        )}
      </Container> */}

      {/* Your Next appointment */}

      {/* Upcoming appointment */}
      {/* <Container className="flex-container mt-5">
        <div>
          <h5>Upcoming Appointment</h5>
          {appointmentPaid.map((item) => (
            <CardUpcoming key={item._id} appointmentPaid={item} />
          ))}
        </div>
      </Container>
      <hr></hr> */}

      {/* RECENT APPOINTMENT */}
      <Container className="flex-container">
        <div>
          <Container
            className="pt-3"
            style={{ height: "150px", width: "400px", paddingTop: "10" }}
          >
            {appointmentPaid.length === 0 ? (
              <Container className="flex-container">
                <div>
                  <h6>Next Appointment</h6>
                  <Alert variant="danger">
                    <h6>You dont have any appointment.</h6>
                  </Alert>
                </div>
              </Container>
            ) : (
              <CardNextAppointment appointmentPaid={appointmentPaid[0]} />
            )}

            {/* UPCOMING APPOINTMENT */}
          </Container>
          {appointmentPaid.length === 0 ? (
            <Container className="flex-container mt-5">
              <div>
                <h6>Upcoming Appointment</h6>
                <Alert variant="danger">
                  <h6>You dont have any appointment.</h6>
                </Alert>
              </div>
            </Container>
          ) : (
            <Container className="flex-container mt-5">
              <div>
                <h6>Upcoming Appointment</h6>
                {appointmentPaid.map((item) => (
                  <CardUpcoming key={item._id} appointmentPaid={item} />
                ))}
              </div>
            </Container>
          )}

          {appointmentDone.length === 0 ? (
            <Container className="flex-container mt-5">
              <div>
                <h6>Recent Appointment</h6>
                <Alert variant="danger">
                  <h6>You dont have any appointment.</h6>
                </Alert>
              </div>
            </Container>
          ) : (
            <Container>
              <h6>Recent Appointment</h6>
              <div className="flex-container">
                {appointmentDone.map((item) => (
                  <CardRecentAppointment
                    key={item._id}
                    appointmentDone={item}
                    appointmentFetch={fetchDataAppointment}
                  />
                ))}
              </div>
            </Container>
          )}
        </div>
      </Container>
      {pendingPayment.length === 0 ? null : (
        <PendingPayments data={pendingPayment} />
      )}
    </>
  );
};

export default PatientDashboard;
