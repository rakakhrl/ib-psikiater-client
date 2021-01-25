import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FilingsLogo from "./images/filings-logo.jpg";
import "./Footer.css";

// import react-icons

import { DiAndroid, DiAppstore } from "react-icons/di";
import { SiInstagram, SiTwitter, SiFacebook } from "react-icons/si";

function Footer() {
  return (
    <div id="footer-wrapper">
      <Container>
        <h2 id="footer-text">Follow Us On</h2>
        <div id="footer-icons-wrapper">
          <SiInstagram id="footer-icons" size="4em" />
          <SiTwitter id="footer-icons" size="4em" />
          <SiFacebook id="footer-icons" size="4em" />
        </div>
      </Container>
    </div>
  );
}
export default Footer;
