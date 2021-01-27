import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./PsikiaterDetail.css";
import { Card, Container, Spinner } from "react-bootstrap";
import API from "../../../API/mainServer";
import ReviewPsikiater from "./RatingPsikiater";

function PsikiaterDetail() {
  const [psikiater, setPsikiater] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await API({
          method: "GET",
          url: "/psikiater/",
        });
        setPsikiater(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return getData;
  }, []);

  const history = useHistory();

  const cardClickHandler = (id) => {
    history.push(`/profile/${id}`);
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner">
          <Spinner variant="primary" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <h1 className="psikiater-detail-page-title">Our Personel</h1>
          <Container className="psikiater-detail-wrapper">
            <>
              <Card
                onClick={() => cardClickHandler(psikiater[0]._id)}
                id="psikiater-detail-card"
              >
                <Card.Img
                  className="psikiater-detail-image-card"
                  variant="top"
                  src={psikiater[0].avatar_url}
                />
                <Card.Body>
                  <Card.Title>
                    {psikiater[0].first_name} {psikiater[0].last_name}
                  </Card.Title>
                  <Card.Text>{`Experience : ${psikiater[0].info.experience_year}`}</Card.Text>
                  <Card.Text>{`Specialize : ${psikiater[0].specialize}`}</Card.Text>
                  <Card.Text>
                    <ReviewPsikiater id={psikiater[0]._id} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </>

            <Card
              onClick={() => cardClickHandler(psikiater[1]?._id)}
              id="psikiater-detail-card"
            >
              <Card.Img
                className="psikiater-detail-image-card"
                variant="top"
                src={psikiater[1]?.avatar_url}
              />
              <Card.Body>
                <Card.Title>
                  {psikiater[1]?.first_name} {psikiater[1]?.last_name}
                </Card.Title>
                <Card.Text>{`Experience : ${psikiater[1]?.info.experience_year}`}</Card.Text>
                <Card.Text>{`Specialize : ${psikiater[1]?.specialize}`}</Card.Text>
                <Card.Text>
                  <ReviewPsikiater id={psikiater[1]?._id} />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              onClick={() => cardClickHandler(psikiater[2]?._id)}
              id="psikiater-detail-card"
            >
              <Card.Img
                className="psikiater-detail-image-card"
                variant="top"
                src={psikiater[2]?.avatar_url}
              />
              <Card.Body>
                <Card.Title>
                  {psikiater[2]?.first_name} {psikiater[2]?.last_name}
                </Card.Title>
                <Card.Text>{`Experience : ${psikiater[2]?.info.experience_year}`}</Card.Text>
                <Card.Text>{`Specialize : ${psikiater[2]?.specialize}`}</Card.Text>
                <Card.Text>
                  <ReviewPsikiater id={psikiater[2]?._id} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
}
export default PsikiaterDetail;
