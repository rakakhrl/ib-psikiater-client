import React, { useState, useEffect } from "react";
import Cards from "../Card/index";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Container } from "react-bootstrap";
import API from "../../API/mainServer";

const Index = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  console.log(accesstoken);

  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState("");
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
      })
      setAppointmentData(res.data.data)
      // console.log(res.data);
    }
    fetchData()
    return fetchData
  }, [])

  const appointment = appointmentData.map((data) => {
    return {
      title: `${data.patient_id.first_name} ${data.patient_id.last_name}`,
      date: `${data.appointment_date} ${data.appointment_time}`,
    };
  });

  function handleEvent(params) {
    console.log(params);
    setToggle(true);
    setUser(params.event._def.title);
  }
  console.log(user);
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
      {toggle && <Cards user={user} />}
    </Container>
  );
};
export default Index;
