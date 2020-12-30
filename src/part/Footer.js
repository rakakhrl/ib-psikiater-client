import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      
      <Jumbotron fluid style={{marginTop:"80px", marginBottom:"0px"}}>
  <Container>
  <h1 style={{textAlign:"center"}}>INI FOOTER</h1>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>

  </Container>
</Jumbotron>
      
    </>
  );
};

export default Footer;
