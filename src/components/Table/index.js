import React, { useState } from "react";
import { Table, Row } from "react-bootstrap";
import { Doctor } from "../../layout/Search/Data";
import Cards from "../Card/index";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Col, Container } from "react-bootstrap";

const Index = () => {
  const [toggle, setToggle] = useState(false);
  const arrayDoctor = Doctor.filter((item) => {
    if (item.id === 2) {
      return item;
    } else {
      return null;
    }
  }).map((item) => {
    return {
      title: item.name,
      date: "2020-12-29",
    };
  });

  return (
    <Container>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        weekends={false}
        events={arrayDoctor}
        eventClick={() => setToggle(true)}
      />
      <br />

      {toggle && <Cards />}
    </Container>
  );
};
export default Index;
