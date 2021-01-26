import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../API/mainServer";
import PsychiatristDetailModal from "./PsychiatristDetailModal";

const PsychiatristApproval = () => {
  const [psychiatrist, setPsychiatrist] = useState([]);
  const [selectedPsychiatrist, setSelectedPsychiatrist] = useState({});
  const [isModalShow, setIsModalShow] = useState(false);

  const fetchPsychiatrist = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: "/psikiater/all/inactive",
        headers: {
          accesstoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjAwZTQ4ODA4ZDdkMWIzMGM4Zjc5MjAxIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjExNjQzMjI2fQ.WJElPqP0QHkpqcP-24EizGSxfLvZTpLQvCnH6UlNJPU",
        },
      });

      setPsychiatrist(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchPsychiatrist();
      return fetchPsychiatrist;
    },
    // eslint-disable-next-line
    []
  );

  const showDetailModal = (psychiatrist) => {
    setSelectedPsychiatrist(psychiatrist);
    setIsModalShow(true);
  };

  const hideDetailModal = () => {
    setIsModalShow(false);
    setSelectedPsychiatrist({});
  };

  return (
    <div className="pt-3">
      <PsychiatristDetailModal
        show={isModalShow}
        handleClose={hideDetailModal}
        psychiatrist={selectedPsychiatrist}
      />
      <h4>Psychiatrist Registration Request</h4>
      <div style={{ height: "80vh", maxHeight: "80vh", overflowY: "scroll" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Psychiatrist ID</th>
              <th>Psychiatrist Name</th>
              <th>Region</th>
              <th>Fee/hr</th>
              <th>Detail</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {psychiatrist.map((p) => (
              <tr>
                <td>{p._id}</td>
                <td>
                  {p.first_name} {p.last_name}
                </td>
                <td>{p.info?.region}</td>
                <td>{p.fees}</td>
                <td>
                  <Button onClick={() => showDetailModal(p)}>
                    Open detail
                  </Button>
                </td>
                <td>
                  <Button>Accept</Button>
                </td>
                <td>
                  <Button>Reject</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PsychiatristApproval;
