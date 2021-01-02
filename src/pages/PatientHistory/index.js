import React, { useState } from "react";
import "./main.css";
import AppointmentCard from "../../components/AppointmentCard";
import PrescriptionModal from "../../components/PrescriptionModal";

const dummyData = [
  {
    psikiater_id: {
      first_name: "Mamang",
      last_name: "Suparman",
      work_address:
        "Jln. Raya Macet No. 41 Bojong Kulur 004/012 Jatisari Jatiasih Bekasi",
      info: {
        region: "Bekasi",
      },
      avatar_url:
        "https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    prescription_id: {
      drugs: {
        drug_name: "Sakatonik ABC",
        consume_method: {
          method_name: "Digerus dulu sama emak",
          time_sequence: ["Sesudah sarapan", "Sebelum tidur"],
        },
      },
    },
    appointment_date: "2021-01-01T10:59:42.518+00:00",
    appointment_time: "14:00",
    complaint: "Feeling down and can't concentrate",
    allergy: ["Panadol"],
    status: "Done",
  },
  {
    psikiater_id: {
      first_name: "Mamang",
      last_name: "Suparman",
      work_address:
        "Jln. Raya Macet No. 41 Bojong Kulur 004/012 Jatisari Jatiasih Bekasi",
      info: {
        region: "Bekasi",
      },
      avatar_url:
        "https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    appointment_date: "2021-01-19T10:59:42.518+00:00",
    appointment_time: "14:00",
    complaint: "",
    allergy: ["Panadol"],
    status: "Paid",
  },
];

const PatientHistory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [prescription, setPrescription] = useState({});

  const handleModalShow = (content, e) => {
    e.preventDefault();
    setPrescription(content);
    setModalShow(true);
  };
  const handleModalClose = () => {
    setModalShow(false);
    setPrescription({});
  };

  return (
    <div className="container main-container">
      <h3 className="title">Patient Appointment History</h3>

      <div className="list-history">
        <PrescriptionModal
          show={modalShow}
          handleClose={handleModalClose}
          prescription={prescription}
        />

        {dummyData.map((d, i) => (
          <AppointmentCard
            key={i}
            appointment={d}
            showModal={(v, e) => handleModalShow(v, e)}
          />
        ))}
        {dummyData.map((d, i) => (
          <AppointmentCard
            key={i}
            appointment={d}
            showModal={(v, e) => handleModalShow(v, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientHistory;
