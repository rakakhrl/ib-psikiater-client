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
import { useParams, useHistory } from "react-router-dom";
import API from "../../API/mainServer";
import {
  useCollection,
  useCollectionData,
  useDocument,
} from "react-firebase-hooks/firestore";
import firebase from "../../config/firebaseConfig";
import ChatMessage from "./ChatMessage";
import Message from "./ChatMessage";
import "./index.css";

const firestore = firebase.firestore();

const ChatRoom = () => {
  const [formValue, setFormValue] = useState("");
  const [dataAppointment, setDataAppointment] = useState([]);

  const role = localStorage.getItem("role");

  const bottomListRef = useRef();

  const { roomChat_id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await API({
          method: "GET",
          url: `/appointments/${roomChat_id}`,
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
  // console.log(dataAppointment)
  // const patientName = dataAppointment.patient_id.first_name;
  // const psikiaterName = dataAppointment.psikiater_id.first_name;
  const messageRef = firestore.collection(`Message/${roomChat_id}/Chat`);
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
          ? `${dataAppointment.patient_id.first_name} ${dataAppointment.patient_id.last_name}`
          : `${dataAppointment.psikiater_id.first_name} ${dataAppointment.psikiater_id.last_name}`,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");

    bottomListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const messageClass = role === "PATIENT" ? "sent" : "received";

  return (
    <>
      {/* SHOW INPUT RESULT  */}
      <Container>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <Spinner variant="primary" animation="border"></Spinner>}
        {messages &&
          messages.map((doc) => {
            return <Message key={doc.id} text={doc.text} sender={doc.sender} />;
          })}
        {/* BUTTON & FORM INPUT */}
        <div>
          <Row>
            <InputGroup>
              <FormControl
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
          </Row>
        </div>

        {/* <Form.Control
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              type="input"
              placeholder="type something here"
            />
            <InputGroup.Append>
              <Button type="submit" disabled={!formValue}>
                💬
              </Button>
            </InputGroup.Append> */}
        <div ref={bottomListRef} />
      </Container>
    </>
  );
};

export default ChatRoom;
