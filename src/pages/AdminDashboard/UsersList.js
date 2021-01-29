import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../API/mainServer";
import moment from "moment";
import PatientDetailModal from "./PatientDetailModal";
import PsychiatristDetailModal from "./PsychiatristDetailModal";

const UserList = () => {
  const [patients, setPatients] = useState([]);
  const [psychiatrist, setPsychiatrist] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [selectedPsychiatrist, setSelectedPsychiatrist] = useState({});
  const [showModalPatient, setShowModalPatient] = useState(false);
  const [showModalPsychiatrist, setShowModalPsychiatrist] = useState(false);

  const fetchListPatient = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: "/patients",
        headers: {
          accesstoken: token,
        },
      });

      setPatients(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchListPsychiatrist = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: "/psikiater",
        headers: {
          accesstoken: token,
        },
      });

      setPsychiatrist(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListPatient();
    fetchListPsychiatrist();

    return {
      fetchListPatient,
      fetchListPsychiatrist,
    };
  }, []);

  const showDetailPatientModal = (patient) => {
    setSelectedPatient(patient);
    setShowModalPatient(true);
  };

  const hideDetailPatientModal = () => {
    setShowModalPatient(false);
    setSelectedPatient({});
  };

  const showDetailPsychiatristModal = (psychiatrist) => {
    setSelectedPsychiatrist(psychiatrist);
    setShowModalPsychiatrist(true);
  };

  const hideDetailPsychiatristModal = () => {
    setShowModalPsychiatrist(false);
    setSelectedPsychiatrist({});
  };

  return (
    <div className="pt-1">
      <PatientDetailModal
        show={showModalPatient}
        handleClose={hideDetailPatientModal}
        patient={selectedPatient}
      />
      <PsychiatristDetailModal
        show={showModalPsychiatrist}
        handleClose={hideDetailPsychiatristModal}
        psychiatrist={selectedPsychiatrist}
      />
      <h4>Patient List</h4>
      <p>total of {patients.length} patients.</p>
      <div style={{ height: "35vh", maxHeight: "32vh", overflowY: "scroll" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Registered at</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p._id}>
                <td>
                  {p.first_name} {p.last_name}
                </td>
                <td>{p.is_active ? "Active" : "Not Active"}</td>
                <td>{moment(p.createdAt).format("DD-MM-YYYY")}</td>
                <td>
                  <Button onClick={() => showDetailPatientModal(p)}>
                    Open detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <br />
      <h4>Psychiatrist List</h4>
      <p>total of {psychiatrist.length} psychiatrist.</p>
      <div style={{ height: "35vh", maxHeight: "32vh", overflowY: "scroll" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Registered at</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {psychiatrist.map((p) => (
              <tr key={p._id}>
                <td>
                  {p.first_name} {p.last_name}
                </td>
                <td>{p.is_active ? "Active" : "Not Active"}</td>
                <td>{moment(p.createdAt).format("DD-MM-YYYY")}</td>
                <td>
                  <Button onClick={() => showDetailPsychiatristModal(p)}>
                    Open detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
