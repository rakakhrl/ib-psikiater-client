import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "../../css/Part.css";

const Footer = () => {
  return (
    <>
      <Jumbotron style={{ backgroundColor: "#70a1ff" }} id="footer">
        <Container>
          <Row>
            <Col className="colom">
              <h2 style={{ textAlign: "center" }}>About Us</h2>
              <p>
                Di Cari Psikiater kami berusaha keras untuk memberi Anda pilihan
                pengobatan psikoterapi yang paling mutakhir dengan mengikuti
                pedoman pengobatan seperti pedoman NICE dari Inggris dan Ulasan
                Cochrane. Jika Anda memiliki pertanyaan, silakan hubungi kami
                melalui email CariPsikiater@gmail.com atau Instagram kami
                @CaPer.id
              </p>
            </Col>
            <Col className="colom">
              <h2 style={{ textAlign: "center" }}>
                Jam Operasional Customer Service
              </h2>
              <ul
                style={{ textAlign: "center" }}
                className="list-unstyled link-list"
              >
                <li>SENIN 09:00 - 17:00</li>
                <li>SELASA 09:00 - 17:00</li>
                <li>RABU 09:00 - 17:00</li>
                <li>KAMIS 09:00 - 17:00</li>
                <li>JUMAT 09:00 - 17:00</li>
                <li>SABTU Tutup</li>
                <li>MINGGU Tutup</li>
              </ul>
            </Col>
            <Col className="colom">
              <h2 style={{ textAlign: "center" }}>Contact Us</h2>
              <address style={{ textAlign: "center" }}>
                Jakarta Pusat <br />
                Sudirman Thamrin <br />
                Phone: +62 21-886677 <br />
                Email:{" "}
                <a href="mailto:info@anybiz.com">CariPsikiater@gmail.com</a>
                <br />
                Web: <a href="smart-eye.html">www.Caripsikiater.id</a>
              </address>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Footer;
