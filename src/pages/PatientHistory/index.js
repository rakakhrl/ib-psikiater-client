import React, { useState, useEffect } from "react";
import "./main.css";
import AppointmentCard from "../../components/AppointmentCard";
import PrescriptionModal from "../../components/PrescriptionModal";
import ReviewAppointmentModal from "../../components/ReviewAppointmentModal";
import API from "../../API/mainServer";
import { useSelector } from "react-redux";

const PatientHistory = () => {
  const user = useSelector((store) => store.user.user_data);
  const [prescriptionModalShow, setPrescriptionModalShow] = useState(false);
  const [reviewModalShow, setReviewModalShow] = useState(false);
  const [prescription, setPrescription] = useState({});
  const [choosenAppointment, setChoosenAppointment] = useState({});
  const [appointment, setAppointment] = useState([]);

  const fetchAppointment = async () => {
    const token = localStorage.getItem("accesstoken");
    const response = await API({
      method: "GET",
      url: `/appointments/patient/${user._id}`,
      headers: {
        accesstoken: token,
      },
    });

    setAppointment(response.data.data);
  };

  useEffect(
    () => {
      fetchAppointment();
    },
    // eslint-disable-next-line
    []
  );

  const handlePerscriptionModalShow = (content, e) => {
    e.preventDefault();
    setPrescription(content);
    setPrescriptionModalShow(true);
  };
  const handlePrescriptionModalClose = () => {
    setPrescriptionModalShow(false);
    setPrescription({});
  };

  const handleReviewModalShow = (content, e) => {
    e.preventDefault();
    setChoosenAppointment(content);
    setReviewModalShow(true);
  };
  const handleReviewModalClose = () => {
    setReviewModalShow(false);
    setChoosenAppointment({});
  };

  return (
    <div className="container main-container">
      <h3 className="title">Patient Appointment History</h3>

      <div className="list-history">
        <PrescriptionModal
          show={prescriptionModalShow}
          handleClose={handlePrescriptionModalClose}
          prescription={prescription}
        />
        <ReviewAppointmentModal
          show={reviewModalShow}
          handleClose={handleReviewModalClose}
          patient_id={choosenAppointment.patient_id?._id}
          psikiater_id={choosenAppointment.psikiater_id?._id}
          appointment_id={choosenAppointment._id}
        />

        {appointment.map((d) => (
          <AppointmentCard
            key={d._id}
            appointment={d}
            showPrescriptionModal={(v, e) => handlePerscriptionModalShow(v, e)}
            showReviewModal={(v, e) => handleReviewModalShow(v, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientHistory;
