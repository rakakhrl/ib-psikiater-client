import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Container, Row, Spinner } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import API from "../../API/mainServer";
import { useCollection, useCollectionData, useDocument } from "react-firebase-hooks/firestore";
import firebase from "../../config/firebaseConfig";
import ChatMessage from "./ChatMessage";

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
  // console.log(dataAppointment)
  // const patientName = dataAppointment.patient_id.first_name;
  // const psikiaterName = dataAppointment.psikiater_id.first_name;
const messageRef = firestore.collection("Message/baMxQGNYocZNx9khpFsp/Chat");
  const [value, loading, error] = useCollection(
   messageRef,
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  
  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

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
      // appointment_id: "",
      // from:
      //   role === "PATIENT"
      //     ? `${dataAppointment.patient_id.first_name} ${dataAppointment.patient_id.last_name}`
      //     : `${dataAppointment.psikiater_id.first_name} ${dataAppointment.psikiater_id.last_name}`,
      text: formValue,
      sender : role === "PATIENT"
          ? `${dataAppointment.patient_id.first_name} ${dataAppointment.patient_id.last_name}`
          : `${dataAppointment.psikiater_id.first_name} ${dataAppointment.psikiater_id.last_name}`,
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
        {messages &&  
          messages.map((doc) => {
            return (
              <div key={doc.id}>
                <p>{doc.sender} :</p>
                <p>{doc.text}</p>
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
            <Button type="submit" disabled={!formValue}>💬</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default ChatRoom;
