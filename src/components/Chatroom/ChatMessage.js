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
  const messageClass = isMyMessage ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <Row>
          <Col>
            {" "}
            <Image
              className="rounded-full"
              src={props?.avatar_url}
              width={45}
              height={45}
            ></Image>
          </Col>
          <Col>
            <Row>
              {" "}
              <span>{props?.sender}</span>
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
    </>
  );
};

export default Message;
