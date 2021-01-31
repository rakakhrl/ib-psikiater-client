import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Form,
  Card,
  Button,
  Image,
  Spinner,
} from "react-bootstrap";
import Countdown from "react-countdown";
import API from "../../API/mainServer";
import StarRatings from "react-star-ratings";
import ImagePasien from "../../assets/images/fauzihaqmuslim.jpg";
import CardUpcoming from "./cardUpcoming";
import CardNextAppointment from "../../components/NextAppointment/cardNextAppointment";
import CardRecentAppointment from "./cardRecentAppointment";
import PendingPayments from "../../components/PendingPayments/index";

import "./index.css";
const PatientDashboard = () => {
  const [appointmentDone, setAppointmentDone] = useState([]);
  const [appointmentPaid, setAppointmentPaid] = useState([]);
  const [pendingPayment, setPendingPayment] = useState([]);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataAppointment();
  }, []);

  // Get patient_id from store
  const store = useSelector((state) => state.user.user_data);
  const patient_id = store._id;

  // // Get Pending Payment Data
  useEffect(() => {
    const getPendingPaymentData = async () => {
      try {
        const response = await API({
          url: `/payments/pending/${patient_id}`,
          method: "GET",
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
          },
        });
        setPendingPayment(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (patient_id) {
      getPendingPaymentData();
    }
    return getPendingPaymentData;
  }, [patient_id]);

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <Container
            className="pt-3"
            style={{ height: "150px", width: "350px", paddingTop: "10" }}
          >
            {appointmentPaid.length === 0 ? (
              <h5 className={"Judul"}>Your dont have any appointment</h5>
            ) : (
              <CardNextAppointment appointmentPaid={appointmentPaid[0]} />
            )}
          </Container>
          {appointmentPaid.length === 0 ? (
            <Container className="flex-container mt-5">
              <div>
                <h5>Upcoming Appointment</h5>
                <h5 className={"Judul"}>Your dont have any appointment</h5>
              </div>
            </Container>
          ) : (
            <Container className="flex-container mt-5">
              <div>
                <h5>Upcoming Appointment</h5>
                {appointmentPaid.map((item) => (
                  <CardUpcoming key={item._id} appointmentPaid={item} />
                ))}
              </div>
            </Container>
          )}
          <Container className="flex-container">
            <div>
              <h5>Recent Appointment</h5>
              {appointmentDone.map((item) => (
                <CardRecentAppointment
                  key={item._id}
                  appointmentDone={item}
                  appointmentFetch={fetchDataAppointment}
                />
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default PatientDashboard;
