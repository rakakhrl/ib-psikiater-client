import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Spinner } from "react-bootstrap";
import API from "../../API/mainServer";
import PsychiatristDetailModal from "./PsychiatristDetailModal";
import swal from "sweetalert";

const PsychiatristApproval = () => {
  const [psychiatrist, setPsychiatrist] = useState([]);
  const [selectedPsychiatrist, setSelectedPsychiatrist] = useState({});
  const [isModalShow, setIsModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPsychiatrist = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: "/psikiater/all/inactive",
        headers: {
          accesstoken: token,
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

  const psychiatristApproval = async (operation, id) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("accesstoken");

      await API({
        method: "POST",
        url: "/admin/psychiatrist-approval",
        headers: {
          accesstoken: token,
        },
        data: {
          admin_action: operation,
          psychiatrist_id: id,
        },
      });
      setIsLoading(false);

      swal("Success", `Success ${operation} this psychiatrist.`, "success");
    } catch (error) {
      console.error(error);
      setIsLoading(false);

      swal("Failed", `Failed ${operation} this psychiatrist.`, "error");
    }
  };

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
      <Modal show={isLoading} backdrop="static" keyboard={false} centered>
        <Spinner animation="border" />
      </Modal>
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
                  <Button onClick={() => psychiatristApproval("accept", p._id)}>
                    Accept
                  </Button>
                </td>
                <td>
                  <Button onClick={() => psychiatristApproval("reject", p._id)}>
                    Reject
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

export default PsychiatristApproval;
