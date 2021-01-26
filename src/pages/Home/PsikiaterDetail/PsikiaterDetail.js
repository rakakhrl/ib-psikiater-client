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
            {psikiater.map((item) => {
              return (
                <>
                  <Card
                    onClick={() => cardClickHandler(item._id)}
                    id="psikiater-detail-card"
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
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </Container>
        </div>
      )}
    </div>
  );
}
export default PsikiaterDetail;
