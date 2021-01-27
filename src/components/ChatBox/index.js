import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Container, Row, Spinner } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import API from "../../API/mainServer";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../config/firebaseConfig";
import ChatMessage from "./ChatMessage";

const firestore = firebase.firestore();

const ChatRoom = () => {
  const [formValue, setFormValue] = useState("");
  const [dataAppointment, setDataAppointment] = useState([]);

  const role = localStorage.getItem("role");

  const bottomListRef = useRef();

  // const { appointment_id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await API({
          method: "GET",
          url: `/appointments/6006dccbb3e0a3610841acc7`,
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
  // const patientName = dataAppointment.patient_id.first_name;
  // const psikiaterName = dataAppointment.psikiater_id.first_name;

  const [value, loading, error] = useCollection(
    firestore.collection("Message"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const messageRef = firestore.collection("Message");
  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages] = useCollection(query, { idField: "id" });

  const userRoleDisplayName = (role) => {
    if (role === "PATIENT") {
      console.log(`${dataAppointment.patient_id.last_name}`);
    } else {
      console.log(` ${dataAppointment.psikiater_id.last_name}`);
    }
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    await messageRef.add({
      appointment_id: "",
      from:
        role === "PATIENT"
          ? `${dataAppointment.patient_id.first_name} ${dataAppointment.patient_id.last_name}`
          : `${dataAppointment.psikiater_id.first_name} ${dataAppointment.psikiater_id.last_name}`,
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");

    bottomListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SHOW INPUT RESULT  */}
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <Spinner variant="primary" animation="border"></Spinner>}
        {value &&
          value.docs.map((doc) => {
            return (
              <div key={doc.data().id}>
                <p>{doc.data().from} :</p>
                <p>{doc.data().text}</p>
                <hr />
              </div>
            );
          })}
      </div>
      <div ref={bottomListRef} />

      {/* BUTTON & FORM INPUT */}
      <div>
        <Form onSubmit={sendMessageHandler}>
          <Form.Group>
            <Form.Control
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              type="input"
              placeholder="type something here"
            />
            <Button type="submit">submit</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default ChatRoom;
