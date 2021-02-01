import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Spinner,
  Form,
  FormGroup,
} from "react-bootstrap";
import API from "../../API/mainServer";
import "./index.css";
import RatingPsikiater from "../Home/PsikiaterDetail/RatingPsikiater";
import moment from "moment";
import swal from "sweetalert";

const PublicPsychiatristProfile = () => {
  const isLogin = useSelector((store) => store.user.isLogin);
  const [psikiater, setPsikiater] = useState();
  const { psychiatrist_id } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const currencyFormatter = require("currency-formatter");

  useEffect(() => {
    const getPsikiaterData = async () => {
      const response = await API({
        url: `/psikiater/${psychiatrist_id}`,
        method: "GET",
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      setPsikiater(response.data.data);
      setIsLoading(false);
    };
    getPsikiaterData();
    return getPsikiaterData;
  }, []);

  const backButtonHandler = () => {
    history.goBack();
  };

  const buttonBookAppointment = (psikiater_id) => {
    if (!isLogin) {
      swal("You have to login first!");
    } else {
      history.push(`/appointment/${psikiater_id}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loading-spinner">
          <Spinner variant="primary" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <h1 className="psikiater-profile-page-title">Psychiatrist Profile</h1>
          <Container className="psikiater-profile-page-wrapper">
            <Row className="psikiater-profile-row-1">
              <Col lg={4} xs={12} className="psikiater-profile-col-1">
                <img
                  className="psikiater-profile-avatar"
                  src={psikiater?.avatar_url}
                  alt="psikiater-profile-avatar"
                ></img>
              </Col>
              <Col lg={7} xs={12} className="psikiater-profile-col-2">
                <Row>
                  <Col xs={12} lg={6}>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        id="public-psikiater-form-control"
                        value={`${psikiater?.first_name} ${psikiater?.last_name}`}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} lg={6}>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        id="public-psikiater-form-control"
                        value={psikiater.gender}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6}>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Date Of Birth</Form.Label>
                      <Form.Control
                        id="public-psikiater-form-control"
                        value={moment(`${psikiater?.date_of_birth}`).format(
                          "DD MMM yyyy"
                        )}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} lg={6}>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Specialize In</Form.Label>
                      <Form.Control
                        id="public-psikiater-form-control"
                        value={psikiater?.specialize}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6}>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Experience Year</Form.Label>
                      <Form.Control
                        id="  "
                        value={psikiater?.info?.experience_year}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Fee/hr</Form.Label>
                      <Form.Control
                        id="public-psikiater-form-control"
                        value={currencyFormatter.format(psikiater.fees, {
                          code: "IDR",
                        })}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6}>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Work Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        value={psikiater.work_address}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup id="public-psikiater-form-group">
                      <Form.Label>Rating</Form.Label>
                      <RatingPsikiater id={psychiatrist_id} />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Container className="psikiater-profile-button-wrapper">
              <Button
                variant="dark"
                className="profile-psikiater-back-button"
                onClick={backButtonHandler}
              >
                {`< Back`}
              </Button>
              <Button
                onClick={() => buttonBookAppointment(`${psikiater._id}`)}
                className="profile-psikiater-button-appointment"
              >
                {`Book Appointment >`}
              </Button>
            </Container>
          </Container>
        </div>
      )}
    </>
  );
};

export default PublicPsychiatristProfile;
