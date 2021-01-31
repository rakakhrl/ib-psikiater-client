import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router-dom";
import placeholderimg from "../../assets/images/fauzihaqmuslim.jpg";
import API from "../../API/mainServer";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Image,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";

const Index = ({
  id,
  first_name,
  last_name,
  work_address,
  experience_year,
  avatar_url,
  gender,
  price,
  region,
  specialize,
  onClick,
}) => {
  const [rating, setRating] = useState(0);
  const currencyFormatter = require("currency-formatter");
  const history = useHistory();

  const fetchRating = async () => {
    try {
      const response = await API({
        method: "GET",
        url: `/psikiater/rating/${id}`,
      });

      console.log(response.data.data);
      setRating(
        Number.parseFloat(
          response.data.data.review.average_rating.$numberDecimal
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchRating();
      return fetchRating;
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Container>
        <Card className="card-result-psikiater-card-wrapper">
          <Row>
            <Col lg={3} md={12}>
              <Image
                className="card-result-psikiater-image"
                src={avatar_url === " " ? placeholderimg : avatar_url}
              />
              <Button
                onClick={() => history.push(`/profile/${id}`)}
                id="card-result-psikiater-button"
                variant="dark"
              >
                See Profile
              </Button>
              <Button
                onClick={onClick}
                id="card-result-psikiater-button"
                variant="outline-success"
              >
                Book Appointment
              </Button>
            </Col>
            <Col lg={9} md={12}>
              <Row>
                <Col lg={4} md={12}>
                  <FormGroup id="card-result-psikiater-form-group">
                    <Form.Label>Psychiatrist Name</Form.Label>
                    <Form.Control
                      id="card-result-psikiater-form-control"
                      readOnly
                      value={`${first_name} ${last_name} `}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4} md={12}>
                  <FormGroup id="card-result-psikiater-form-group">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      id="card-result-psikiater-form-control"
                      readOnly
                      value={gender}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4} md={12}>
                  <FormGroup id="card-result-psikiater-form-group">
                    <Form.Label>Region</Form.Label>
                    <Form.Control
                      id="card-result-psikiater-form-control"
                      readOnly
                      value={region}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={12}>
                  <FormGroup id="card-result-psikiater-form-control">
                    <Form.Label>Fee/hr</Form.Label>
                    <Form.Control
                      id="card-result-psikiater-form-control"
                      readOnly
                      value={currencyFormatter.format(price, { code: "IDR" })}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4} md={12}>
                  <FormGroup id="card-result-psikiater-form-group">
                    <Form.Label>Specialize</Form.Label>
                    <Form.Control
                      id="card-result-psikiater-form-control"
                      readOnly
                      value={specialize}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4} md={12}>
                  <FormGroup id="card-result-psikiater-form-group">
                    <Form.Label>Experience Year</Form.Label>
                    <Form.Control
                      id="card-result-psikiater-form-control"
                      readOnly
                      value={experience_year}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <FormGroup>
                    <Form.Label>Work Address</Form.Label>
                    <Form.Control readOnly as="textarea" value={work_address} />
                  </FormGroup>
                </Col>
                <Col lg={6} md={12}>
                  <FormGroup id="card-result-psikiater-form-group">
                    <Form.Label>Rating</Form.Label>
                    <br />
                    <div className="card-result-psikiater-rating-wrapper">
                      <StarRatings
                        starDimension="40px"
                        starSpacing="2px"
                        rating={rating}
                        numberOfStars={5}
                        starRatedColor="gold"
                        name="rating"
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Index;

// Old Code

// <div className="card">
//   <div className="left-side">
//     <div className="name">
//       <h4>
//         {first_name} {last_name}
//       </h4>
//     </div>
//     <div className="address">
//       <p>Work Address: {work_address}</p>
//     </div>
//     <div className="experience">
//       <h6>Year of experience: {experience_year}</h6>
//     </div>
//     <div className="region">
//       <h6>Region: {region}</h6>
//     </div>
//   </div>
//   <div className="middle-side">
//     <div className="star">
//       <StarRatings
//         rating={rating}
//         numberOfStars={5}
//         starRatedColor="gold"
//         name="rating"
//       />
//     </div>
//     <div className="price">
//       <h2> Rp. {price} / hour</h2>
//     </div>
//     <button onClick={onClick}>book appointment</button>
//   </div>
//   <div className="right-side">
//     <Image
//       src={avatar_url === " " ? placeholderimg : avatar_url}
//       roundedCircle
//       style={{ width: "200px" }}
//     />
//     <button onClick={() => history.push(`/profile/${id}`)}>
//       see profile
//     </button>
//   </div>
// </div>
