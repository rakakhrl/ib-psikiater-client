import React from "react";
import { useSelector } from "react-redux";
import { Button, Form, Container, Row, Spinner } from "react-bootstrap";
import moment from "moment";

const Message = (props) => {
  const role = useSelector((store) => store.user.role);
  moment.locale("en");
  const messageClass = role === "PATIENT" ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <p className="ChatMessage-p">{props?.sender}</p>
        <h6>: {props?.text}</h6>
        <span className="text-gray-500 text-xs">
          Send {moment(props?.createdAt?.toDate()).calendar()}
        </span>
      </div>
    </>
  );
};

export default Message;
