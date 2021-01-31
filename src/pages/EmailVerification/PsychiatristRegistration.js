import React from "react";
import { Container } from "react-bootstrap";
import image from "../../assets/images/undraw_Mail_sent_re_0ofv.png";

const PsychiatristRegistration = () => {
  return (
    <Container style={{ marginTop: "40px" }}>
      <img
        style={{ display: "block", margin: "auto", height: "400px" }}
        src={image}
      />
      <h4 className="text-primary text-center">
        Please wait for admin to approve your registration and we will send you
        an email for verification.
      </h4>
    </Container>
  );
};

export default PsychiatristRegistration;
