import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "../Card/index";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import API from "../../API/mainServer";
import moment from "moment";
import CreatePrescriptionModal from "../CreatePrescriptionModal.js";
import AddDiagnoseModal from "../AddDiagnoseModal.js";
import appointmentAction from "../../redux/actions/appointmentAction.js";
import swal from "sweetalert";

const Index = () => {
  const dispatch = useDispatch();
  const accesstoken = localStorage.getItem("accesstoken");
  const [toggle, setToggle] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState({});
  const [appointmentData, setAppointmentData] = useState([]);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showDiagnoseModal, setShowDiagnoseModal] = useState(false);

  //fetch data ketika page pertama kali di buka
  useEffect(() => {
    const fetchData = async () => {
      const res = await API({
        method: "GET",
        url: `/appointments/psikiater`,
        headers: {
          accesstoken: accesstoken,
        },
      });
      console.log(res.data);
      setAppointmentData(res.data.data);
    };
    fetchData();
    return fetchData;
  }, []);

  const appointment = appointmentData.map((data) => {
    return {
      appointment: data,
      title: `${data.patient_id.first_name} ${data.patient_id.last_name}`,
      date: `${moment(data.appointment_date).format("YYYY-MM-DD")} ${
        data.appointment_time
      }`,
    };
  });

  function handleEvent(params) {
    console.log(params.event._def.extendedProps.appointment);
    setSelectedAppointment(params.event._def.extendedProps.appointment);
    setToggle(true);
  }

  const handlePrescriptionModalShow = () => {
    setShowPrescriptionModal(true);
  };
  const handlePrescriptionModalClose = () => {
    setShowPrescriptionModal(false);
  };

  const handleDiagnoseModalShow = () => {
    setShowDiagnoseModal(true);
  };
  const handleDiagnoseModalClose = () => {
    setShowDiagnoseModal(false);
  };

  const handleFinishAppointment = () => {
    dispatch(
      appointmentAction.changeStatusAppointment(
        "Done",
        selectedAppointment._id,
        localStorage.getItem("accesstoken")
      )
    );
    swal("Success", "Appointment sudah selesai", "success");
  };

  const AppointmentActionButtons = () => (
    <Row>
      <Col>
        <ButtonGroup
          style={{ marginBottom: "1rem" }}
          aria-label="Appointment Action Group"
        >
          <Button
            variant="primary"
            onClick={handlePrescriptionModalShow}
            disabled={
              selectedAppointment.prescription_id ||
              selectedAppointment.status === "Done"
                ? true
                : false
            }
          >
            Buat Resep
          </Button>
          <Button
            variant="primary"
            onClick={handleDiagnoseModalShow}
            disabled={
              selectedAppointment.diagnose.diagnose_name === "" ? false : true
            }
          >
            Buat Diagnosa
          </Button>
        </ButtonGroup>
      </Col>
      <Col style={{ textAlign: "end" }}>
        <ButtonGroup
          style={{ marginBottom: "1rem" }}
          aria-label="Second Action Group"
        >
          <Button
            variant="primary"
            onClick={handleFinishAppointment}
            disabled={selectedAppointment.status === "Done" ? true : false}
          >
            Appointment Selesai
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );

  return (
    <Container>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Schedule</h1>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        weekends={false}
        events={appointment}
        eventClick={handleEvent}
      />
      <br />
      {toggle && (
        <>
          <AppointmentActionButtons />
          <CreatePrescriptionModal
            show={showPrescriptionModal}
            handleClose={handlePrescriptionModalClose}
            appointment_id={selectedAppointment._id}
          />
          <AddDiagnoseModal
            show={showDiagnoseModal}
            handleClose={handleDiagnoseModalClose}
            appointment_id={selectedAppointment._id}
          />
          <Cards appointment={selectedAppointment} />
        </>
      )}
    </Container>
  );
};
export default Index;
