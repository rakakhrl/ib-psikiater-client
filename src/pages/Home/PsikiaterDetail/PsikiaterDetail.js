import React, { useEffect, useState } from "react";
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

  return (
    <div>
      {psikiater.map((item) => {
        return (
          <div>
            <h3 className="psikiater-detail-page-title">Our Personel</h3>
            <Container className="psikiater-detail-wrapper">
              <Card
                className="psikiater-detail-card"
                style={{ width: "18rem" }}
              >
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

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Container>
          </div>
        );
      })}
    </div>
  );
}
export default PsikiaterDetail;
