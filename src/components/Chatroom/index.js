import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Spinner,
  InputGroup,
  FormControl,
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

const firestore = firebase.firestore();

const ChatRoom = ({ room, appointment }) => {
  const [formValue, setFormValue] = useState("");
  const [dataAppointment, setDataAppointment] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [statusAppointment, setStatusAppointment] = useState("");

  const role = useSelector((store) => store.user.role);

  const bottomListRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
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
    getUserData();
    return getUserData;
  }, []);

  const messageRef = firestore.collection(`Message/${room}/Chat`);
  const [value, loading, error] = useCollection(messageRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const query = messageRef.orderBy("createdAt").limit(100);

  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    await messageRef.add({
      // appointment_id: "",
      // from:
      //   role === "PATIENT"
      //     ? `${dataAppointment.patient_id.first_name} ${dataAppointment.patient_id.last_name}`
      //     : `${dataAppointment.psikiater_id.first_name} ${dataAppointment.psikiater_id.last_name}`,
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
        url: `/appointments/${appointment_id}`,
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

  return (
    <>
      {/* SHOW INPUT RESULT  */}
      <Container>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <Spinner variant="primary" animation="border"></Spinner>}
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
        {role === "PSIKIATER" ? (
          <Button onClick={changeStatusDoneAlert}>End Session</Button>
        ) : null}
        {/* BUTTON & FORM INPUT */}
        <div className="FormButton">
          <Row>
            <Form className="fixed-bottom" onSubmit={sendMessageHandler}>
              <InputGroup>
                {isDone ? (
                  <FormControl
                    disabled={true}
                    className="flex-1"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    type="input"
                    placeholder="Type something here"
                  />
                ) : (
                  <FormControl
                    className="flex-1"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    type="input"
                    placeholder="Type something here"
                  />
                )}
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
          </Row>
        </div>
        <div ref={bottomListRef} />
      </Container>
    </>
  );
};

export default ChatRoom;
