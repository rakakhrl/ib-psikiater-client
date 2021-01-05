import React, { useState, useEffect } from "react";
import API from "../../API/mainServer";
import { Container, Form, Col, Row } from "react-bootstrap";

const Index = () => {
  const userId = localStorage.getItem("userId");
  const accesstoken = localStorage.getItem("accesstoken");
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await API({
        method: "GET",
        url: `/psikiater/${userId}`,
        headers: {
          accesstoken: accesstoken,
        },
      });
      setProfile(response.data.data);
      console.log(response.data.data);
    };
    fetchProfile();
    return fetchProfile;
  }, []);

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
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Nama Depan
            </Form.Label>
            <Col sm="3">
              <Form.Control
                type="text"
                placeholder="Nama Depan"
                value={profile.first_name}
                readOnly
              />
            </Col>
            <Form.Label column sm="2">
              Nama Panjang
            </Form.Label>
            <Col sm="3">
              <Form.Control
                type="text"
                placeholder="Nama Panjang"
                value={profile.last_name}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="email"
                value={profile.email}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Tanggal Lahir
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Tanggal Lahir"
                value={profile.date_of_birth}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Jenis Kelamin
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Jenis Kelamin"
                value={profile.gender}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Alamat Kantor
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Alamat Kantor"
                value={profile.work_address}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Pengalaman
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Pengalaman"
                value={profile.info.experience_year}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Wilayah
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Wilayah"
                value={profile.info.region}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Jam Kerja
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Jam Kerja"
                value={profile.schedule.work_days}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Waktu Bekerja
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Waktu Bekerja"
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
