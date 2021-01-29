import React from "react";
import { Container } from "react-bootstrap";
import image from "../../assets/images/undraw_Mail_sent_re_0ofv.png";

const SentVerification = () => {
  return (
    <Container style={{ marginTop: "40px" }}>
      <img
        style={{ display: "block", margin: "auto", height: "400px" }}
        src={image}
      />
      <h4 className="text-primary text-center">
        We have send you an email for verification. Please click the link in the
        email to verify it's you.
      </h4>
    </Container>
  );
};

export default SentVerification;
