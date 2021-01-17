import React from "react";
import { useHistory } from "react-router-dom";

const Index = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Chat Room </h1>

      <button onClick={history.push("/")}></button>
    </div>
  );
};

export default Index;
