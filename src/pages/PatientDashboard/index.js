import React, { useState } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Form,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import StarRatings from "react-star-ratings";
import ImagePasien from "../../assets/images/fauzihaqmuslim.jpg";
import "./index.css";
const PatientDashboard = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  return (
    <>
      {/* Your Next appointment */}
      <Container
        className="pt-3"
        style={{ height: "150px", width: "350px", paddingTop: "10" }}
      >
        <h5 className={"Judul"}>Your Next Appointment Starts In</h5>
        <Card>
          <Card.Body>
            <Row>
              <Col className={"col-8"}>
                <Card.Text style={{ fontSize: "2em" }}>00:00:00</Card.Text>
                <Card.Text>Online Appointment</Card.Text>
              </Col>
              <Col className={"col-4"}>
                <Image
                  className={"PhotoPsikiater"}
                  src={ImagePasien}
                  style={{ width: "75px", height: "75px" }}
                  alt="pasienPicture.jpg"
                  roundedCircle
                />
                <Card.Text style={{ marginLeft: "10px" }}>Dr.Fauzi</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      {/* Your Next appointment */}

      {/* Upcoming appointment */}
      <div>
        <Container className="flex-container mt-5">
          <div>
            <h5>Upcoming Appointment</h5>
            <Card className="">
              <Card.Body>
                <Row>
                  <Col className="col-4">
                    <Image
                      className={"PhotoPsikiater"}
                      src={ImagePasien}
                      style={{ width: "50px", height: "50px" }}
                      alt="pasienPicture.jpg"
                      roundedCircle
                    />
                  </Col>
                  <Col className="col-8">
                    <Card.Text>Dr.Fauzi</Card.Text>
                    <Card.Text className="">10-08-2021</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Card.Text className="mt-3">
                    Jl. Klender Barat II/2 Jakarta Timur
                  </Card.Text>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Container>

        <hr></hr>

        {/* RECENT APPOINTMENT */}
        <Container className="flex-container">
          <div>
            <h5>Recent Appointment</h5>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Image
                      className={"PhotoPsikiater"}
                      src={ImagePasien}
                      style={{ width: "50px", height: "50px" }}
                      alt="pasienPicture.jpg"
                      roundedCircle
                    />
                  </Col>
                  <Col>
                    <Card.Text>Dr.Fauzi</Card.Text>
                    <Card.Text className="">10-08-2021</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Card.Text className="mt-3">
                    Jl. Klender Barat II/2 Jakarta Timur
                  </Card.Text>
                </Row>
              </Card.Body>
              <Card.Text>Not Rated Yet</Card.Text>
              <StarRatings
                rating={rating}
                changeRating={(newRating, name) => setRating(newRating)}
                starRatedColor="gold"
                starDimension="30px"
              />
              <Button>Create Review</Button>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PatientDashboard;
