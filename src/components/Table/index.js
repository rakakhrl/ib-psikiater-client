import React, { useState, useEffect } from "react";
import Cards from "../Card/index";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Container } from "react-bootstrap";
import API from "../../API/mainServer";
import moment from "moment";

const Index = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  console.log(accesstoken);

  const [toggle, setToggle] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState({});
  const [appointmentData, setAppointmentData] = useState([]);

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
      {toggle && <Cards appointment={selectedAppointment} />}
    </Container>
  );
};
export default Index;
