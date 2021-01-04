import React from "react";
import { Card, Carousel, Container, CardDeck } from "react-bootstrap";

const Testimoni = () => {
  return (
    <>
      <section class="wrapper style1">
        <div class="inner">
          <header class="align-center">
            <h2>Apa Kata Mereka</h2>
          </header>
          <Container>
            <div class="flex flex-3">
              <div class="col align-center">
                <div class="image round fit">
                  <img
                    src="https://non-indonesia-distribution.brta.in/2018-08/ce8014b02db258d883f545cc27bf4b35.jpg"
                    alt=""
                  />
                </div>
                <p>
                  Sudah 3,5 tahun saya rutin berkunjung ke psikiater. Awalnya
                  yang konsultasi 1 jam, lalu menurun jadi 45 menit, sekarang
                  jadi sekitar 15-30 menit. Memang untuk kondisi bipolar seperti
                  saya ini harus selalu dipantau. Namun saya merasa sudah sangat
                  jauh lebih baik jika dibandingkan saya pertama kali berkunjung
                  ke psikiater dulu.
                </p>
              </div>
              <div class="col align-center">
                <div class="image round fit">
                  <img
                    src="https://cdn.idntimes.com/content-images/post/20190110/c12-e35fa457b5c8da29b2c488cf2204dcbd_600x400.jpg"
                    alt=""
                  />
                </div>
                <p>
                  Di luar segala rasa lelah dan perasaan ingin menyerah, kini
                  saya bisa menertawakan perjalanan depresi saya. Saya bersyukur
                  pernah melalui berbagai terapi. Karena berkat terapi-terapi
                  itu, tidak hanya ‘sembuh’ dari gangguan mental yang saya
                  alami, saya juga menjadi manusia yang jauh lebih baik karena
                  semakin memahami mekanisme pikiran dan emosi saya.
                </p>
              </div>
              <div class="col align-center">
                <div class="image round fit">
                  <img
                    src="https://image-cdn.medkomtek.com/VU4jKu3sxnr8jCNWpXZ99DDqQhM=/673x379/smart/klikdokter-media-buckets/medias/2309218/original/027041400_1573260772-Setiap-Orang-Punya-Tipe-Pasangan-Ideal-Mengapa-Bisa-Begitu-By-Roman-Samborskyi-Shutterstock_777923671.jpg"
                    alt=""
                  />
                </div>
                <p>
                  Untuk teman-teman atau anggota keluarganya yang memiliki
                  masalah gangguan pikiran dan jiwa. Jangan ragu dan takut untuk
                  segera konsultasi ke psikiater. Saya sendiri sudah berobat selama
                  beberapa bulan dan sudah merasakan perubahan positif. Keadaan
                  pikiran dan mental saya jauh lebih baik dari sebelumnya.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
