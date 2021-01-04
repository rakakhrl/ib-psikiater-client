import React from "react";
import { Row, Col, Image, Container, Carousel } from "react-bootstrap";

const LineSatu = () => {
  return (
    <>
      <Carousel className="wrapper style1">
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://scontent.fsub7-1.fna.fbcdn.net/v/t1.0-9/135604960_3854645761223085_2398874445404700536_n.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_eui2=AeGd1wFCmdo4yvvuAsb016Rghkoj8IS0f8KGSiPwhLR_wir5549QBF8cbUFFzc5qxOLhMLLgO1itgducXBtVcgMr&_nc_ohc=51hqTJGvAPUAX_gPASH&_nc_ht=scontent.fsub7-1.fna&oh=34e59394671ff2788c3f0641555681ba&oe=6015FD64"
                  fluid
                />
              </Col>
              <Col style={{ textAlign: "justify" }}>
                <h3>Konseling Keluarga</h3>
                <p>
                  Apakah anda terjebak dengan berbagai persoalan konflik dalam
                  rumah tangga, anak, pasangan, mertua dan sejuta persoalan
                  lainnya? Apakah keluarga Anda terlibat berbagai masalah bagai
                  benang kusut dimana Anda sudah tidak tahu bagaimana
                  menyelesaikan berbagai persoalan yang ada? Apakah Anda merasa
                  lelah dan tidak tahu apa dan bagaimana solusi untuk berbagai
                  persoalan Anda? Anda merasa ingin mendapatkan pertolongan
                  profesional untuk membantu Anda memecahkan masalah tanpa
                  adanya ancaman dipermalukan dan rahasia Anda tersebar? Jika
                  ya, Anda membuka website yang tepat. Dalam kehidupan saat ini
                  yang penuh dengan tantangan, Konseling menjadi suatu kebutuhan
                  mutlak bagi siapapun Anda.
                </p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://scontent.fsub7-1.fna.fbcdn.net/v/t1.0-9/135180212_3854655777888750_4080453323495265062_n.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_eui2=AeHg6-GmXWjsqfyCC4TCsOkqLQNv7ijR9dgtA2_uKNH12NA0IqMoyoagryWAKR78BdA_-3zRId7lI_kSl4AhyeJw&_nc_ohc=PddMhqZMw-0AX_fb1Ag&_nc_ht=scontent.fsub7-1.fna&oh=efd7e3211d6d33f2cd944835c5ca1b81&oe=6015961B"
                  fluid
                />
              </Col>
              <Col style={{ textAlign: "justify" }}>
                <h3>Konseling Pra Nikah</h3>
                <p>
                  Pernikahan adalah menyatukan dua pribadi yang berbeda dengan
                  keunikan masing-masing. Setiap individu memiliki ekspektasi
                  yang berbeda terhadap pernikahan dan pasangannya. Kesamaan
                  persepsi mengenai pernikahan tentu harus ditemukan sebelum dua
                  insan ini memutuskan untuk hidup bersama selamanya. Untuk
                  menyamakan persepsi ini terkadang dibutuhkan konseling sebelum
                  pernikahan. Sebelum menikah, Anda dan pasangan perlu
                  menjelaskan visi masing-masing, termasuk apa yang diyakini dan
                  rencana saat menikah nanti. Konseling pra-nikah membantu Anda
                  dan pasangan untuk mengindentifikasikan visi dan menyatukannya
                  sebelum akhirnya menjalani hidup bersama.
                </p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://scontent.fsub7-1.fna.fbcdn.net/v/t1.0-9/134923232_3854653557888972_4275836946074596538_n.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_eui2=AeH4Zynbu9Pv3hvMKCkYsRMH9QpMKl7lLEf1CkwqXuUsR4xVEsK1kXnT9Ldco7x_sZOxQtmbayBSpQ-Trx-nsJ1q&_nc_ohc=aNvvSpo8_6UAX-7qW3J&_nc_ht=scontent.fsub7-1.fna&oh=216371d8a176a2ec1586e515d97d2a00&oe=601737E6"
                  fluid
                />
              </Col>
              <Col style={{ textAlign: "justify" }}>
                <h3>Konseling Anak</h3>
                <p>
                  Bimbingan konseling anak merupakan kegiatan yang sengaja
                  dilakukan dalam upaya pemberian bantuan kepada anak salah
                  satunya untuk mengontrol emosi. Bentuk kegiatan bimbingan
                  konseling bagi anak adalah bermain. Bermain dijadikan sebagai
                  instrumen utama untuk menstabilkan emosi anak.
                </p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default LineSatu;