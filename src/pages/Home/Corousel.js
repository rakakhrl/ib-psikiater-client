import React from "react";
import { Carousel } from "react-bootstrap";
import "../../css/Part.css";

const Corousel = () => {
  return (
    <>
      <Carousel id="corousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/freeimg_2767530freejpg850.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/freeimg_33784289freejpg850.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/freeimg_58746987freejpg850.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Corousel;
