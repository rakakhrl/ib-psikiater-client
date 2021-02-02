import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import API from "../../API/mainServer";
import swal from "sweetalert";
import "./index.css";
import {
  Container,
  Form,
  Col,
  Row,
  Image,
  Button,
  InputGroup,
  Card,
  Modal,
} from "react-bootstrap";
import moment from "moment";
import userAction from "../../redux/actions/userAction";

const Index = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const accesstoken = localStorage.getItem("accesstoken");
  const patient = useSelector((store) => store.user.user_data);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [nameFile, setNameFile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadPhoto = (e) => {
    setSelectedFile(e.target.files[0]);
    setNameFile(e.target.files[0].name);
  };

  const callback = () => {
    dispatch(userAction.fetchUserData());
    setShowAvatarModal(false);
  };

  const handlePhoto = () => {
    dispatch(userAction.uploadFotoPasien(selectedFile, callback));
  };

  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
          color: "#70a1ff",
        }}
      >
        Profile patient
      </h1>
      <Container>
        <Modal
          show={showAvatarModal}
          onHide={() => setShowAvatarModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Foto Profile Psikiater</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>{nameFile}</label>
              <input type="file" onChange={uploadPhoto} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowAvatarModal(false)}
            >
              Close
            </Button>
            <Button variant="primary" onClick={handlePhoto}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
        <Card className="profile-patient-card-wrapper">
          <Row>
            <Col md={12} lg={6}>
              <Image
                className="profile-patient-avatar"
                src={patient.avatar_url}
                height="250"
                width="250"
                roundedCircle
                onClick={() => setShowAvatarModal(true)}
              />
            </Col>
            <Col md={12} lg={6} className="profile-patient-main-column-1">
              <Form>
                <Row>
                  <Col lg={6} md={12}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={`${patient.first_name} ${patient.last_name}`}
                      readOnly
                    />
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control value={`${patient.gender}`} readOnly />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={12}>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                      value={moment(`${patient.date_of_birth}`).format(
                        "DD MMMM YYYY"
                      )}
                      readOnly
                    />
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={patient.email} readOnly />
                  </Col>
                </Row>
                <Row>
                  <Col lg={19} md={12}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={patient.address} readOnly row={3} />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Index;
