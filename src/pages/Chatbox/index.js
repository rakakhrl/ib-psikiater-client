import React from "react";
import { useHistory, useParams } from "react-router-dom";
import ChatRoom from "../../components/ChatRoom/index";
import "./index.css";

const Index = () => {
  const history = useHistory();
  const { roomChat_id, appointment_id } = useParams();
  return (
    <div>
      <h1>Chat Room </h1>
      <ChatRoom roomChat_id={roomChat_id} appointment_id={appointment_id} />
    </div>
  );
};

export default Index;
