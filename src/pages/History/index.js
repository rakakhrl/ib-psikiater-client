import React, { useState, useEffect } from "react";
import API from "../../API/mainServer";
import AppointmentCard from "../../components/AppointmentCard";
import PrescriptionModal from "../../components//PrescriptionModal.js";

const Index = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  const [prescriptionModalShow, setPrescriptionModalShow] = useState(false);
  const [prescription, setPrescription] = useState({});
  const [listOfAppointment, setListOfAppointment] = useState([]);

  useEffect(() => {
    const fetchAppointment = async () => {
      const res = await API({
        method: "GET",
        url: `/appointments/psikiater`,
        headers: { accesstoken: accesstoken },
      });
      console.log(res.data);
      setListOfAppointment(res.data.data);
    };
    fetchAppointment();
    return fetchAppointment;
  }, []);

  const handlePerscriptionModalShow = (content, e) => {
    e.preventDefault();
    setPrescription(content);
    setPrescriptionModalShow(true);
  };
  const handlePrescriptionModalClose = () => {
    setPrescriptionModalShow(false);
    setPrescription({});
  };

  const listOfHistory = listOfAppointment.map((appointment) => {
    return (
      <AppointmentCard
        appointment={appointment}
        showPrescriptionModal={(v, e) => handlePerscriptionModalShow(v, e)}
        showRating={false}
      />
    );
  });

  return (
    <>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>History</h1>
      <PrescriptionModal
        show={prescriptionModalShow}
        handleClose={handlePrescriptionModalClose}
        prescription={prescription}
      />
      {listOfHistory}
    </>
  );
};

export default Index;
