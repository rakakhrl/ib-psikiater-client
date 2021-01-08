import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import API from "../../API/mainServer";
import { Container, Form, Col, Row, Image } from "react-bootstrap";

const Index = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  const profile = useSelector((store) => store.user.user_data);
  console.log(profile);

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
        Profile
      </h1>
      <Container
        style={{
          backgroundColor: "#ff6b81",
          padding: "20px",
        }}
      >
        <Row></Row>
        <Form
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Col style={{ textAlign: "center" }}>
            <Image
              src={
                profile.avatar_url === ""
                  ? "../images/pic04.jpg"
                  : profile.avatar_url
              }
              roundedCircle
              alt="images"
              height="300"
              width="300"
            />
          </Col>
          <Form.Group as={Row}>
            <Col sm="3">
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Depan"
                value={profile.first_name}
                readOnly
              />
            </Col>
            <Col sm="3">
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Panjang"
                value={profile.last_name}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="email"
                value={profile.email}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tanggal Lahir"
                value={profile.date_of_birth}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jenis Kelamin"
                value={profile.gender}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Alamat Kantor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alamat Kantor"
                value={profile.work_address}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Pengalaman</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pengalaman"
                value={profile.info?.experience_year}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group style={{ marginBottom: "100px" }}>
            <Col sm="8">
              <Form.Label>Wilayah</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wilayah"
                value={profile.info?.region}
                readOnly
              />
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Index;
