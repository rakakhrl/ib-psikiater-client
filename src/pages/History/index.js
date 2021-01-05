import React, { useState, useEffect } from "react";
import API from "../../API/mainServer";
import AppointmentCard from "../../components/AppointmentCard";

const Index = () => {
  const accesstoken = localStorage.getItem("accesstoken");

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

  const listOfHistory = listOfAppointment.map((appointment) => {
    return <AppointmentCard appointment={appointment} />;
  });

  return (
    <>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Hisotry</h1>
      {listOfHistory}
    </>
  );
};

export default Index;
