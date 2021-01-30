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
import { useSelector } from "react-redux";
import API from "../../API/mainServer";
import {
  useCollection,
  useCollectionData,
  useDocument,
} from "react-firebase-hooks/firestore";
import firebase from "../../config/firebaseConfig";
import "firebase/firestore";
import moment from "moment";
import ChatMessage from "./ChatMessage";
import Message from "./ChatMessage";
import "./index.css";

const firestore = firebase.firestore();

const ChatRoom = ({ roomChat_id, appointment_id }) => {
  const [formValue, setFormValue] = useState("");
  const [dataAppointment, setDataAppointment] = useState([]);

  const role = useSelector((store) => store.user.role);

  const bottomListRef = useRef();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await API({
          method: "GET",
          url: `/appointments/${appointment_id}`,
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
          ? `${dataAppointment?.patient_id?.first_name} ${dataAppointment?.patient_id?.last_name}`
          : `${dataAppointment?.psikiater_id?.first_name} ${dataAppointment?.psikiater_id?.last_name}`,
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
            return (
              <Message
                key={doc?.id}
                text={doc?.text}
                sender={doc?.sender}
                createdAt={doc?.createdAt}
              />
            );
          })}
        {/* BUTTON & FORM INPUT */}
        <div className="FormButton">
          <Row>
            <Form
              sticky="bottom"
              onSubmit={sendMessageHandler}
              className="float"
            >
              <InputGroup>
                <FormControl
                  className="flex-1"
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
          </Row>
        </div>
        <div ref={bottomListRef} />
      </Container>
    </>
  );
};

export default ChatRoom;
