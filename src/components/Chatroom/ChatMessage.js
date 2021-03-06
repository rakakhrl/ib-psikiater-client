import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Form,
  Container,
  Row,
  Spinner,
  Image,
  Col,
} from "react-bootstrap";
import moment from "moment";

const Message = (props) => {
  const Role = useSelector((store) => store.user.role);
  moment.locale("en");
  const isMyMessage = Role === props.role;
  const messageClass = isMyMessage ? "received" : "sent";

  return (
    <div className={`message ${messageClass}`}>
      <Row style={{ padding: "25px" }}>
        <Col>
          {" "}
          <Image
            className="rounded-full"
            src={props?.avatar_url}
            width="50"
            height="auto"
            roundedCircle
          ></Image>
        </Col>
        <Col>
          <Row>
            {" "}
            <span>
              <strong>{props?.sender}</strong>
            </span>
            <p className="ChatMessage-p">{props?.text}</p>
          </Row>
          <Row>
            {" "}
            <span className="ChatMessage-date">
              Send {moment(props?.createdAt?.toDate()).calendar()}
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Message;
