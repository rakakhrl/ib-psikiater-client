import React, { useState } from "react";
import { Button, Form, Container, Row, Spinner } from "react-bootstrap";

const Message = (props) => {
  const role = localStorage.getItem("role");
  const messageClass = role === "PATIENT" ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <p className="ChatMessage-p">{props.sender}</p>
        <h6>: {props.text}</h6>
      </div>
    </>
  );
};

export default Message;
