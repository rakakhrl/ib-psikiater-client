import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";


const LineDua = () => {
  return (
    <>
    <div className="wrapper style2">
      <Container>
      <Row>
        <Col style={{textAlign:"justify"}}>
          <h3>Area</h3>
          <p>Pelayanan Kami hanya Sekitar Jabodetabek</p>
        </Col>
        <Col>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Depok&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://piratebayproxy.net/">pirate bay proxy</a></div></div>
        </Col>
      </Row>
      </Container>
    </div>
      
      
    </>
  );
};

export default LineDua;
