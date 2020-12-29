import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { Jumbotron, Button, Form, Modal, Col, Carousel } from "react-bootstrap";

const Home = () => {
  

  return (
    <div>
      {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/freeimg_2767530freejpg850.jpg"
      alt="First slide"
      style={{height:"500px"}}
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
      style={{height:"500px"}}
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
      style={{height:"500px"}}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
     

      <h1>Ini adalah halaman Home</h1>
      

      
    </div>
  );
};

export default Home;
