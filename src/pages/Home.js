import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button} from "react-bootstrap";

import Corousel from "../part/Corousel";
import LineSatu from "../part/LineSatu";
import LineDua from "../part/LineDua";
import Testimoni from "../part/Testimoni";
import Footer from "../part/Footer";

const Home = () => {
  
  const history = useHistory();
  
  
  const handleShow = () => {
    history.push('/login')
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Corousel />
      <LineSatu />
      <LineDua />
      <Testimoni />
      <Footer />
      
    </div>
  );
};

export default Home;
