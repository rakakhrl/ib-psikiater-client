import React from "react";
import { Card, Carousel, Container, CardDeck } from "react-bootstrap";
import "../../css/Part.css";

const Testimoni = () => {
  return (
    <>
      <section id="style3">
        <div>
          <header>
            <h2 style={{ marginBottom: "50px", color: "#ff6b81" }}>
              Apa Kata Mereka
            </h2>
          </header>
          <Container>
            <CardDeck>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://non-indonesia-distribution.brta.in/2018-08/ce8014b02db258d883f545cc27bf4b35.jpg"
                  style={{ height: "15em" }}
                />
                <Card.Body>
                  <Card.Text
                    className="cardtext"
                    style={{ textAlign: "justify", fontSize: "18px" }}
                  >
                    Sudah 3,5 tahun saya rutin berkunjung ke psikiater. Awalnya
                    yang konsultasi 1 jam, lalu menurun jadi 45 menit, sekarang
                    jadi sekitar 15-30 menit. Memang untuk kondisi bipolar
                    seperti saya ini harus selalu dipantau. Namun saya merasa
                    sudah sangat jauh lebih baik jika dibandingkan saya pertama
                    kali berkunjung ke psikiater dulu.
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ textAlign: "center" }}>
                  <small className="text-muted">Last updated 1 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  style={{ height: "15em" }}
                  variant="top"
                  src="https://cdn.idntimes.com/content-images/post/20190110/c12-e35fa457b5c8da29b2c488cf2204dcbd_600x400.jpg"
                />
                <Card.Body>
                  <Card.Text
                    className="cardtext"
                    style={{ textAlign: "justify", fontSize: "18px" }}
                  >
                    Di luar segala rasa lelah dan perasaan ingin menyerah, kini
                    saya bisa menertawakan perjalanan depresi saya. Saya
                    bersyukur pernah melalui berbagai terapi. Karena berkat
                    terapi-terapi itu, tidak hanya ‘sembuh’ dari gangguan mental
                    yang saya alami, saya juga menjadi manusia yang jauh lebih
                    baik karena semakin memahami mekanisme pikiran dan emosi
                    saya.
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ textAlign: "center" }}>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  style={{ height: "15em" }}
                  variant="top"
                  src="https://image-cdn.medkomtek.com/VU4jKu3sxnr8jCNWpXZ99DDqQhM=/673x379/smart/klikdokter-media-buckets/medias/2309218/original/027041400_1573260772-Setiap-Orang-Punya-Tipe-Pasangan-Ideal-Mengapa-Bisa-Begitu-By-Roman-Samborskyi-Shutterstock_777923671.jpg"
                />
                <Card.Body>
                  <Card.Text
                    className="cardtext"
                    style={{ textAlign: "justify", fontSize: "18px" }}
                  >
                    Untuk teman-teman atau anggota keluarganya yang memiliki
                    masalah gangguan pikiran dan jiwa. Jangan ragu dan takut
                    untuk segera konsultasi ke psikiater. Saya sendiri sudah
                    berobat selama beberapa bulan dan sudah merasakan perubahan
                    positif. Keadaan pikiran dan mental saya jauh lebih baik
                    dari sebelumnya.
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ textAlign: "center" }}>
                  <small className="text-muted">Last updated 2 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
