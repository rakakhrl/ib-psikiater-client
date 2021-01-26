import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import doctorImage from "./doctor.svg";
import filingsLogo from "./filings-logo.jpg";
import "./Consultation.css";

function Consultation() {
  //   Scroll to top local state
  const [isVisible, setIsVisible] = useState(false);
  const toogleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);
  }, []);

  // Kalo di pencet ke halaman checkout premium (Untuk Premium Card)

  // Kalo di pencet ke section try it now (Untuk Reguler Card)
  const tryItNow = () => {
    scrollToTop();
  };

  return (
    <div className="scroll-to-top">
      <Container id="page-wrapper">
        <Row>
          <Col>
            <img className="doctor-image" src={doctorImage}></img>
          </Col>
          <Col>
            <h1 className="consultation-h1">Consultation</h1>
            <p className="consultation-text-p">
              find a psychiatrist and consultation easily and comfortably with
              the assurance of your privacy. You can do <b>face-to-face</b> or{" "}
              <b>Online</b> consultations with your favorite psychiatrist.{" "}
              <b> What are you waiting for? Try It Now!</b>
            </p>
            {isVisible && (
              <Button className="try-now-button" onClick={tryItNow}>
                <span>Try It Now</span>
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <hr id="hr-consultation" />
      </Container>
    </div>
  );
}
export default Consultation;
