import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Jumbotron from "./Jumbotron/Jumbotron";
import PremiumCard from "./PremiumCard/PremiumCard";
import MapArea from "./MapArea/MapArea";
import PsikiaterDetail from "./PsikiaterDetail/PsikiaterDetail";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <Jumbotron />
      <PremiumCard />
      <MapArea />
      <PsikiaterDetail />
    </div>
  );
};

export default Home;

// import { Button } from "react-bootstrap";

// import Corousel from "./Corousel";
// import LineSatu from "./LineSatu";
// import LineDua from "./LineDua";
// import Testimoni from "./Testimoni";
// import Footer from "./Footer";

// <Corousel />
//       <LineSatu />
//       <LineDua />
//       <Testimoni />
//       <Footer />
