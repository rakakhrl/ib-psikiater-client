import React, { useState } from "react";
// import { Doctor } from "../../pages/Search/Data";
import Cards from "../Card/index";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Container } from "react-bootstrap";

const arrayDoctor = [
  {
    id: 1,
    psikiater_id: "123332",
    patient_id: {
      first_name: "Fauzi haq",
      last_name: "muslim",
    },
    presciption_id: "8712872",
    appointment_date: "2020-12-31",
    appointment_time: "09:00",
  },
   {
    id: 2,
    psikiater_id: "123332",
    patient_id: {
      first_name: "Naufal",
      last_name: "Al-Fachri",
    },
    presciption_id: "8712872",
    appointment_date: "2020-12-30",
    appointment_time: "08:00",
  },
   {
    id: 3,
    psikiater_id: "123332",
    patient_id: {
      first_name: "Oktado",
      last_name: "Putra",
    },
    presciption_id: "8712872",
    appointment_date: "2020-12-29",
    appointment_time: "07:00",
  },
   {
    id: 4,
    psikiater_id: "123332",
    patient_id: {
      first_name: "Raka",
      last_name: "Khrairil",
    },
    presciption_id: "8712872",
    appointment_date: "2020-12-28",
    appointment_time: "06:00",
  },
   {
    id: 5,
    psikiater_id: "123332",
    patient_id: {
      first_name: "Dheal",
      last_name: "Lufiga",
    },
    presciption_id: "8712872",
    appointment_date: "2021-01-01",
    appointment_time: "10:00",
  },
]

const Index = () => {
  const [toggle, setToggle] = useState(false);
  const[user, setUser] = useState("");
  const appointment = arrayDoctor.map((data) => {
    return{
      title: `${data.patient_id.first_name} ${data.patient_id.last_name}`,
      date: `${data.appointment_date} ${data.appointment_time}`,
    }
  })
  function handleEvent(params) {
    console.log(params);
    setToggle(true);
    setUser(params.event._def.title)
  }
  console.log(user);
  return (
    <Container>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        weekends={false}
        events={appointment}
        eventClick={handleEvent}
      />
      <br />
      {toggle && <Cards
      user = {user}
      />}
    </Container>
  );
};
export default Index;
