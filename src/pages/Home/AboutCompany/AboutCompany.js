import "./AboutCompany.css";
import aboutFilings from "./about-filings.svg";
import { Container, Row, Col } from "react-bootstrap";

function AboutCompany() {
  return (
    <div>
      <Container className="about-company-wrapper">
        <Row>
          <Col md={12} lg={6} id="column-about-filings-1">
            <h1 className="about-filings-h1">It All Started From...</h1>
            <p className="about-filings-p1">
              Naufal, the person who tell stories on social media, but instead
              of getting support or solutions, it actually brings hatred, and
              lead him into a depression.
            </p>
            <p className="about-filings-p2">
              Filings is made to listen to your story and find the right
              solution for your story with the presence of reliable and
              professional psychiatrists in their fields.
            </p>
          </Col>
          <Col md={12} lg={6}>
            <img className="about-filings-logo" src={aboutFilings}></img>
          </Col>
        </Row>
      </Container>
      <Container>
        <hr id="horizontal-rule-about" />
      </Container>
    </div>
  );
}
export default AboutCompany;
