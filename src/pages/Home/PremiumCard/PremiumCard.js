import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import "./PremiumCard.css";

function PremiumCard() {
  //   Scroll to top local state
  const [isVisible, setIsVisible] = useState(false);
  const toogleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);
  }, []);

  // Kalo di pencet ke halaman checkout premium (Untuk Premium Card)

  // Kalo di pencet ke section try it now (Untuk Reguler Card)
  const regulerCard = () => {
    scrollToTop();
  };

  return (
    <div className="scroll-to-top">
      <h2 id="page-title">Our Plan</h2>
      <Container id="page-wrapper">
        <Card id="premium-card">
          <Card.Header>
            <Card.Title className="premium-card-title">Premium Card</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text className="premium-card-text">
              Max 2 Hour Concultation
            </Card.Text>
            <Card.Text>
              <h4 className="premium-card-text-price">Only IDR 1.000.000</h4>
            </Card.Text>
          </Card.Body>
        </Card>

        {isVisible && (
          <Card onClick={regulerCard} id="reguler-card">
            <Card.Header>
              <Card.Title className="reguler-card-title">
                Reguler Card
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="reguler-card-text">
                Max 1 Hour Concultation
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Container>
      <Container>
        <hr id="hr-premium" />
      </Container>
    </div>
  );
}
export default PremiumCard;
