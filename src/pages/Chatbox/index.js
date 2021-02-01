import React from "react";
import { useHistory, useParams } from "react-router-dom";
import ChatRoom from "../../components/Chatroom/index";
import "./index.css";

const Index = () => {
  const { roomChat_id, appointment_id } = useParams();
  return (
    <div>
      <h1>Chat Room </h1>
      <ChatRoom room={roomChat_id} appointment={appointment_id} />
    </div>
  );
};

export default Index;
