import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Button, Spinner } from "react-bootstrap";
import image from "../../assets/images/undraw_season_change_f99v.png";
import API from "../../API/mainServer";

const LinkExpired = ({ token }) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const requestNewLink = async () => {
    try {
      setIsLoading(true);
      await API({
        method: "GET",
        url: `/verify-user/request-new/${token}`,
      });
      setIsLoading(false);

      history.push("/email-verification?type=sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <img
        style={{ display: "block", margin: "auto", height: "400px" }}
        src={image}
      />
      <h4 className="text-primary text-center">
        Hi! It seems the verification link you click is expired. Please click
        the button below to request new link
      </h4>
      <br />
      <Button
        disabled={isLoading}
        style={{ display: "block", margin: "auto" }}
        onClick={requestNewLink}
      >
        {isLoading ? <Spinner animation="border" /> : "Request new link"}
      </Button>
    </Container>
  );
};

export default LinkExpired;
