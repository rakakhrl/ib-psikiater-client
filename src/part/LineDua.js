import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

const LineDua = () => {
  return (
    <>
      <h1 style={{textAlign:"center", marginTop:"80px"}}>Psikolog atau Psikiater: Mana yang Tepat Untuk Anda?</h1>
      <Container>
      <Row>
        <Col style={{textAlign:"justify"}}>
          Pilih psikolog atau psikiater jika Anda atau orang-orang terdekat Anda
          merasa atau sedang mengalami masalah kesehatan mental? Apa
          perbedannya? Anda bukanlah satu-satunya orang yang merasa kebingungan
          di luar sana. Memang ada kesamaan, tetapi ada perbedaan yang penting
          untuk diperhatikan. Inilah yang perlu di ketahui untuk memutuskan mana
          yang tepat untuk Anda.
        </Col>
        <Col>
          <Image
            src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1606056941/attached_image/memanfaatkan-konsultasi-psikologi-untuk-meningkatkan-kesehatan-mental.jpg"
            fluid
          />
        </Col>
      </Row>
      </Container>
      
    </>
  );
};

export default LineDua;
