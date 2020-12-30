import React from "react";
import { Card, Carousel, Container, CardDeck } from "react-bootstrap";

const Testimoni = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Testimoni</h1>
      <Container>
          <Carousel>
            <Carousel.Item>
            <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://www.firstmedia.com/files/images/blog/mudah-banget-ini-cara-membagikan-avatar-di-facebook-yang-sedang-viral.jpg" />
            <Card.Body>
              <Card.Title>Card title1</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://pickaface.net/gallery/avatar/unr_cowok_190111_1555_w27rc.png" />
            <Card.Body>
              <Card.Title>Card title2</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.firstmedia.com/files/images/blog/mudah-banget-ini-cara-membagikan-avatar-di-facebook-yang-sedang-viral.jpg" />
            <Card.Body>
              <Card.Title>Card title3</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
            </Carousel.Item>
            <Carousel.Item>
            <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://pickaface.net/gallery/avatar/unr_cowok_190111_1555_w27rc.png" />
            <Card.Body>
              <Card.Title>Card title4</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.firstmedia.com/files/images/blog/mudah-banget-ini-cara-membagikan-avatar-di-facebook-yang-sedang-viral.jpg" />
            <Card.Body>
              <Card.Title>Card title5</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://pickaface.net/gallery/avatar/unr_cowok_190111_1555_w27rc.png" />
            <Card.Body>
              <Card.Title>Card title6</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
            </Carousel.Item>
          </Carousel>
        
      </Container>
    </>
  );
};

export default Testimoni;
