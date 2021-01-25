import React, { useState, useEffect } from "react";
import Jumbotron from "./Jumbotron/Jumbotron";
import AboutCompany from "./AboutCompany/AboutCompany";
import Consultation from "./Consultation/Consultation";
import MapArea from "./MapArea/MapArea";
import PsikiaterDetail from "./PsikiaterDetail/PsikiaterDetail";
import Footer from "./Footer/Footer";
import CompanyNameFooter from "./CompanyNameFooter.js/CompanyNameFooter";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <AboutCompany />
      <Consultation />
      <MapArea />
      <PsikiaterDetail />
      <Footer />
      <CompanyNameFooter />
    </div>
  );
};

export default Home;
