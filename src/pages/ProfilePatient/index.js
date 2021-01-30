import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../API/mainServer";
import { Container, Form, Col, Row, Image } from "react-bootstrap";

const ProfilePatient = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  const profile = useSelector((store) => store.user.user_data);
  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
          color: "#70a1ff",
        }}
      >
        Profile Pasien
      </h1>
      <Container
        style={{
          backgroundColor: "#ff6b81",
          padding: "20px",
        }}
      >
        <Form style={{ marginTop: "20px", textAlign: "center" }}>
          <Col style={{ textAlign: "center" }}>
            <Image
              src={
                profile.avatar_url === ""
                  ? "../images/pic04.jpg"
                  : profile.avatar_url
              }
              roundedCircle
              alt="images"
              height="300px"
              width="300px"
            />
          </Col>
        </Form>
      </Container>
    </>
  );
};
<Form></Form>;

export default ProfilePatient;
