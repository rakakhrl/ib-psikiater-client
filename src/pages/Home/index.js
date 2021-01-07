import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import Corousel from "./Corousel";
import LineSatu from "./LineSatu";
import LineDua from "./LineDua";
import Testimoni from "./Testimoni";
import Footer from "./Footer";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <Corousel />
      <LineSatu />
      <LineDua />
      <Testimoni />
      <Footer />
    </div>
  );
};

export default Home;
