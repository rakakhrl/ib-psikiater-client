import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import API from "../../API/mainServer";

const UserList = () => {
  const [patients, setPatients] = useState([]);
  const [psychiatrist, setPsychiatrist] = useState([]);

  const fetchListPatient = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: "/patients",
        header: {
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
        header: {
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

  return (
    <div className="pt-3">
      <h4>Patient List</h4>
      <div style={{ height: "35vh", maxHeight: "35vh", overflowY: "scroll" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Registered at</th>
              <th>Detail</th>
              <th>Activate</th>
              <th>Deactivate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Oji Enjoy</td>
              <td>Active</td>
              <td>14-11-2020</td>
              <td>Open detail</td>
              <td>Activate</td>
              <td>Deactivate</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <br />
      <h4>Psychiatrist List</h4>
      <div style={{ height: "35vh", maxHeight: "35vh", overflowY: "scroll" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Registered at</th>
              <th>Detail</th>
              <th>Activate</th>
              <th>Deactivate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Van Der Sar</td>
              <td>Active</td>
              <td>11-04-2019</td>
              <td>Open detail</td>
              <td>Activate</td>
              <td>Deactivate</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
