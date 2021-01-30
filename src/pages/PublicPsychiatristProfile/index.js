import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
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
              <Col lg={4} md={12} className="psikiater-profile-col-1">
                <img
                  className="psikiater-profile-avatar"
                  src={psikiater?.avatar_url}
                  alt="psikiater-profile-avatar"
                ></img>
              </Col>
              <Col lg={7} md={12} className="psikiater-profile-col-2">
                <h4>{`Name : ${psikiater?.first_name} ${psikiater?.last_name} (${psikiater.gender})`}</h4>
                <h4>
                  Date of Birth :{" "}
                  {moment(`${psikiater?.date_of_birth}`).format("DD MMM yyyy")}
                </h4>
                <h4>{`Specialized In : ${psikiater?.specialize} `}</h4>
                <h4>{`Experience : ${psikiater?.info?.experience_year}`}</h4>
                <h4>Work Address :</h4>
                <h4>{psikiater.work_address}</h4>
                <h4>
                  {currencyFormatter.format(psikiater.fees, { code: "IDR" })}
                </h4>
                <h4>
                  <RatingPsikiater id={psychiatrist_id} />
                </h4>
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
