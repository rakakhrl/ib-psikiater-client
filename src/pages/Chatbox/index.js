import React from "react";
import { useHistory } from "react-router-dom";
import ChatRoom from "../../components/ChatBox/index";

const Index = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Chat Room </h1>
      <ChatRoom />
    </div>
  );
};

export default Index;
