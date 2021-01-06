import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import API from "../../API/mainServer";
import { Container, Form, Col, Row } from "react-bootstrap";

const Index = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  const profile = useSelector((store) => store.user.user_data);
  console.log(profile);

  return (
    <>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Profile</h1>
      <Container style={{ backgroundColor: "#ededed", padding: "20px" }}>
        <Form>
          <Col style={{ textAlign: "center" }}>
            <img
              src="https://scontent.fsub7-1.fna.fbcdn.net/v/t1.0-9/135604960_3854645761223085_2398874445404700536_n.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_eui2=AeGd1wFCmdo4yvvuAsb016Rghkoj8IS0f8KGSiPwhLR_wir5549QBF8cbUFFzc5qxOLhMLLgO1itgducXBtVcgMr&_nc_ohc=51hqTJGvAPUAX_gPASH&_nc_ht=scontent.fsub7-1.fna&oh=34e59394671ff2788c3f0641555681ba&oe=6015FD64"
              fluid
              alt="images"
              style={{
                width: "300px",
                paddingBottom: "20px",
              }}
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
          <Form.Group>
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
          <Form.Group>
            <Col sm="8">
              <Form.Label>Hari Kerja</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jam Kerja"
                value={profile.schedule.work_days}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Waktu Bekerja</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jam Kerja"
                value={profile.schedule.work_time}
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
