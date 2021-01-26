import React, { useState, useRef } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";

import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import "firebase/firestore";
import FirebaseConfig from "../../pages/firebaseConfig";

import ChatMessage from "./ChatMessage";

const firebaseApp = firebase.initializeApp(FirebaseConfig);

const firestore = firebase.firestore();

const ChatRoom = () => {
  const [formValue, setFormValue] = useState("");

  const [value, loading, error] = useCollection(
    firestore.collection("Message"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const messageRef = firestore.collection("Message");
  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages] = useCollection(query, { idField: "id" });

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    await messageRef.add({
      appointment_id: "1241241214",
      from: "Oktado",
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");
  };

  return (
    <>
      {/* SHOW INPUT RESULT  */}
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value &&
          value.docs.map((doc) => {
            return (
              <div key={doc.data().id}>
                <>{doc.data().from} :</>
                <p>{doc.data().text}</p>
                {/* <p>Timestamp: {JSON.stringify(doc.data().timestamp)}</p> */}
                <hr />
              </div>
            );
          })}
      </div>

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
