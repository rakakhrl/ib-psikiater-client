import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Jumbotron from "./Jumbotron/Jumbotron";
import AboutCompany from "./AboutCompany/AboutCompany";
import PremiumCard from "./PremiumCard/PremiumCard";
import MapArea from "./MapArea/MapArea";
import PsikiaterDetail from "./PsikiaterDetail/PsikiaterDetail";
import Footer from "./Footer/Footer";
import CompanyNameFooter from "./CompanyNameFooter.js/CompanyNameFooter";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <AboutCompany />
      <PremiumCard />
      <MapArea />
      <PsikiaterDetail />
      <Footer />
      <CompanyNameFooter />
    </div>
  );
};

export default Home;
