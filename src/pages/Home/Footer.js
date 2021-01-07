import React from "react";
import { Jumbotron,Container,Row,Col } from "react-bootstrap";
import "../../css/Part.css";

const Footer = () => {
  return (
    <>
      <Jumbotron id="footer">
        <Container>
          <Row>
            <Col className="colom">
              <h2>About Us</h2>
              <p>
                Di (nama website) kami berusaha keras untuk memberi Anda pilihan
                pengobatan psikoterapi yang paling mutakhir dengan mengikuti
                pedoman pengobatan seperti pedoman NICE dari Inggris dan Ulasan
                Cochrane. Jika Anda memiliki pertanyaan, silakan hubungi kami
                melalui email(……………...com) atau Instagram / Facebook kami
                (@..................).
              </p>
            </Col>
            <Col className="colom">
              <h2>Jam Operasional Customer Service</h2>
              <ul className="list-unstyled link-list">
                <li>SENIN 09:00 - 21:00</li>
                <li>SELASA 09:00 - 21:00</li>
                <li>RABU 09:00 - 21:00</li>
                <li>KAMIS 09:00 - 21:00</li>
                <li>JUMAT 09:00 - 21:00</li>
                <li>SABTU Tutup</li>
                <li>MINGGU Tutup</li>
              </ul>
            </Col>
            <Col className="colom">
              <h2>Contact Us</h2>
              <address>
                BlueDart <br />
                Marthandam (K.K District) <br />
                Tamil Nadu, IND <br />
                Phone: +91 9159669599 <br />
                Email: <a href="mailto:info@anybiz.com">info@bluedart.in</a>
                <br />
                Web: <a href="smart-eye.html">www.bluedart.in</a>
              </address>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Footer;
