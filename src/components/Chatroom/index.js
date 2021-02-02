import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Spinner,
  InputGroup,
  FormControl,
  ButtonGroup,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import API from "../../API/mainServer";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import appointmentAction from "../../redux/actions/appointmentAction";
import firebase from "../../config/firebaseConfig";
import "firebase/firestore";
import "firebase/database";
import Message from "./ChatMessage";
import swal from "sweetalert";
import "./index.css";
import CreatePrescriptionModal from "../CreatePrescriptionModal.js";
import AddDiagnoseModal from "../AddDiagnoseModal.js";

const firestore = firebase.firestore();

const ChatRoom = ({ room, appointment }) => {
  const [formValue, setFormValue] = useState("");
  const [dataAppointment, setDataAppointment] = useState({});
  const [isDone, setIsDone] = useState(false);
  const [statusAppointment, setStatusAppointment] = useState("");
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showDiagnoseModal, setShowDiagnoseModal] = useState(false);

  const role = useSelector((store) => store.user.role);

  const bottomListRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const response = await API({
        method: "GET",
        url: `/appointments/${appointment}`,
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      setDataAppointment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    return getUserData;
  }, []);

  useEffect(() => {
    console.log(dataAppointment.diagnose?.diagnose_date ? true : false);
  }, [dataAppointment]);

  const messageRef = firestore.collection(`Message/${room}/Chat`);
  const [value, loading, error] = useCollection(messageRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const query = messageRef.orderBy("createdAt").limit(100);

  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    await messageRef.add({
      text: formValue,
      sender:
        role === "PATIENT"
          ? `${dataAppointment?.patient_id?.first_name} ${dataAppointment?.patient_id?.last_name}`
          : `${dataAppointment?.psikiater_id?.first_name} ${dataAppointment?.psikiater_id?.last_name}`,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      role: role,
      avatar_url:
        role === "PATIENT"
          ? `${dataAppointment?.patient_id?.avatar_url}`
          : `${dataAppointment?.psikiater_id?.avatar_url}`,
    });

    setFormValue("");

    bottomListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const messageClass = role === "PATIENT" ? "sent" : "received";

  const changeStatusPatient = () => {
    const ref = firestore.collection("Message").doc(room);

    dispatch(
      appointmentAction.changeStatusAppointment(
        "Done",
        appointment,
        localStorage.getItem("accesstoken"),
        ref
          .update({
            isDone: true,
          })
          .then(function () {})
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          })
      )
    );
  };

  const ref = firestore.collection("Message").doc(room);

  ref.onSnapshot(function (doc) {
    setIsDone(doc?.data()?.isDone);
  });

  const changeStatusDoneAlert = () => {
    swal("Are you sure want to end this session?", {
      buttons: {
        changeStatus: {
          text: "Yes",
          value: "changeStatus",
        },
        No: {
          text: "No",
          value: false,
        },
      },
    }).then((value) => {
      switch (value) {
        case "changeStatus":
          changeStatusPatient();
          break;
      }
    });
  };

  const getUserDataStatus = async () => {
    try {
      const response = await API({
        method: "GET",
        url: `/appointments/${appointment}`,
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      setStatusAppointment(response.data.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  getUserDataStatus();
  useEffect(() => {
    console.log(statusAppointment);
  }, []);

  const endedSessionAlert = () => {
    if (statusAppointment) {
      if (statusAppointment === "Done") {
        return swal("End session");
      } else {
        swal("Your Session has ended", {
          buttons: {
            goBack: {
              text: "Ok",
              value: "goBack",
            },
          },
        }).then((value) => {
          switch (value) {
            case "goBack":
              goBackHandler();
              break;
          }
        });
      }
    }
  };

  const goBackHandler = () => {
    if (role === "PATIENT") {
      history.push("/patient-dashboard");
    } else {
      history.push("/psikiater-dashboard");
    }
  };

  useEffect(() => {
    if (isDone) {
      endedSessionAlert();
    }
  }, [isDone]);

  const handlePrescriptionModalShow = () => {
    setShowPrescriptionModal(true);
  };
  const handlePrescriptionModalClose = () => {
    getUserData();
    setShowPrescriptionModal(false);
  };

  const handleDiagnoseModalShow = () => {
    setShowDiagnoseModal(true);
  };
  const handleDiagnoseModalClose = () => {
    getUserData();
    setShowDiagnoseModal(false);
  };

  return (
    <Container className="d-flex flex-column justify-center bg-style">
      <Row>
        <CreatePrescriptionModal
          show={showPrescriptionModal}
          handleClose={handlePrescriptionModalClose}
          appointment_id={appointment}
        />
        <AddDiagnoseModal
          show={showDiagnoseModal}
          handleClose={handleDiagnoseModalClose}
          appointment_id={appointment}
        />

        {role === "PSIKIATER" ? (
          <ButtonGroup className="chatroom-button-psikiater">
            <Button onClick={changeStatusDoneAlert}>End Session</Button>
            <Button
              onClick={handleDiagnoseModalShow}
              disabled={dataAppointment.diagnose?.diagnose_date ? true : false}
            >
              Add Diagnose
            </Button>
            <Button
              onClick={handlePrescriptionModalShow}
              disabled={dataAppointment.prescription_id ? true : false}
            >
              Create Prescription
            </Button>
          </ButtonGroup>
        ) : null}
      </Row>
      <div className="scroll-chatbox">
        <Row>
          {loading && <Spinner variant="primary" animation="border"></Spinner>}
          <Col style={{ marginBottom: "50px" }}>
            {messages &&
              messages.map((doc) => {
                return (
                  <Message
                    key={doc?.id}
                    text={doc?.text}
                    sender={doc?.sender}
                    createdAt={doc?.createdAt}
                    role={doc?.role}
                    avatar_url={doc?.avatar_url}
                  />
                );
              })}
          </Col>
        </Row>
      </div>
      <hr></hr>
      <Row className="sticky-bottom">
        <Col className="form-chatbox">
          <Form onSubmit={sendMessageHandler}>
            <InputGroup>
              <FormControl
                disabled={isDone}
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                type="input"
                placeholder="Type something here"
              />

              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  type="submit"
                  disabled={!formValue}
                  onClick={sendMessageHandler}
                >
                  💬
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>

      <div ref={bottomListRef} />
    </Container>
  );
};

export default ChatRoom;
