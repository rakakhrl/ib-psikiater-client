import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../css/Part.css";

const LineDua = () => {
  return (
    <>
      <div id="style2">
        <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
          <Row>
            <Col>
              <h3 style={{ marginTop: "30%", color: "#ff6b81" }}>
                <b>Cari Psikiater Sekitar JABODETABEK !</b>
              </h3>
            </Col>
            <Col>
              <h3 style={{ color: "#70a1ff" }}>Area</h3>
              <div>
                <div className="super-iframe-holder">
                  <iframe
                    width="500px"
                    height="500px"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Depok&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LineDua;
