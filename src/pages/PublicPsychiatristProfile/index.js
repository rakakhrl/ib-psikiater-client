import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import API from "../../API/mainServer";
import "./index.css";

const PublicPsychiatristProfile = () => {
  const { psikiater_id } = useParams();

  useEffect(() => {
    const getPsikiaterData = async () => {
      const response = await API({
        url: `/psikiater/${psikiater_id}`,
        method: "GET",
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      console.log(response);
    };
    getPsikiaterData();
    return getPsikiaterData;
  }, []);
  return (
    <>
      <h1 className="psikiater-profile-title">Psychiatrist Profile</h1>
      <Container id="profile-psikiater-wrapper">
        <Row id="profile-psikiater-row-1">
          <Col className="psikiater-profile-column-1" sm={12} lg={4}>
            <img
              className="photo-profile-psikiater"
              src="https://greatmind.id/uploads/contributor-detail/739a579afaa6613b12930f1a7d90769df8107735.jpg"
              alt="dr-boyke-photo"
            ></img>
          </Col>
          <Col sm={12} lg={4} className="psikiater-profile-column-2">
            <h4>Dr. Boyke</h4>
            <h4>Gender : Male</h4>
            <h4>
              Work Address : <br />
              Jl. Percetakan Negara
            </h4>
          </Col>
          <Col sm={12} lg={4} className="psikiater-profile-column-3">
            <h4>
              Specialized In : <br />
              Relationship Counceling
            </h4>
            <h4>ratings : 5 Bintang</h4>
            <h4>Experience : 5 Year</h4>
            <Button className="profile-psikiater-button">
              Book Appointment
            </Button>
          </Col>
        </Row>
        <Row id="profile-psikiater-row-3">
          <Card id="psikiater-review-card-wrapper">
            <Card.Body>
              <Card.Title>
                <b>Naufal Al-Fachri</b>
              </Card.Title>
              <Card.Text>
                Setelah konsultasi dengan dr boyke, hubungan saya dengan istri
                menjadi lebih harmonis
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default PublicPsychiatristProfile;
