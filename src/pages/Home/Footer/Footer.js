import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FilingsLogo from "./images/filings-logo.jpg";
import "./Footer.css";
import { SiInstagram, SiTwitter, SiFacebook } from "react-icons/si";

function Footer() {
  return (
    <div id="footer-wrapper">
      <Container>
        <Row className="footer-row">
          <Col>
            <img className="filings-logo-footer" src={FilingsLogo}></img>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="footer-text">Follow Us On</h2>
            <div id="footer-icons-wrapper">
              <a href="https://www.instagram.com/filings.co/">
                <SiInstagram id="footer-icons" size="4em" />
              </a>
              <a href="https://twitter.com/FilingsID"><SiTwitter id="footer-icons" size="4em" /></a>
              <SiFacebook id="footer-icons" size="4em" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
