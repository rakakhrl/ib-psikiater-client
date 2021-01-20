import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./PsikiaterDetail.css";
import { Card, Button, Container } from "react-bootstrap";
import API from "../../../API/mainServer";
import ReviewPsikiater from "./ReviewPsikiater";

function PsikiaterDetail() {
  const [psikiater, setPsikiater] = useState([]);

  useEffect(() => {
    console.log(psikiater);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await API({
          method: "GET",
          url: "/psikiater/",
        });
        setPsikiater(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return getData;
  }, []);

  const history = useHistory();

  const cardClickHandler = () => {
    history.push("/profile/:psychiatrist_id");
  };

  return (
    <div>
      <h1 className="psikiater-detail-page-title">Our Personel</h1>
      <Container className="psikiater-detail-wrapper">
        {psikiater.map((item) => {
          return (
            <>
              <Card onClick={cardClickHandler} id="psikiater-detail-card">
                <Card.Img
                  className="psikiater-detail-image-card"
                  variant="top"
                  src={item.avatar_url}
                />
                <Card.Body>
                  <Card.Title>
                    {item.first_name} {item.last_name}
                  </Card.Title>
                  <Card.Text>{`Experience : ${item.info.experience_year}`}</Card.Text>
                  <Card.Text>{`Specialize : ${item.specialize}`}</Card.Text>
                  <Card.Text>
                    <ReviewPsikiater id={item._id} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </Container>
      <Container></Container>
    </div>
  );
}
export default PsikiaterDetail;
