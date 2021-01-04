import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>About Us</h2>
              <p>
                Di (nama website) kami berusaha keras untuk memberi Anda pilihan
                pengobatan psikoterapi yang paling mutakhir dengan mengikuti
                pedoman pengobatan seperti pedoman NICE dari Inggris dan Ulasan
                Cochrane. Jika Anda memiliki pertanyaan, silakan hubungi kami
                melalui email(……………...com) atau Instagram / Facebook kami
                (@..................).
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
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
            </div>
            <div className="col-md-4 col-sm-12 map-img">
              <h2>Contact Us</h2>
              <address className="md-margin-bottom-40">
                BlueDart <br />
                Marthandam (K.K District) <br />
                Tamil Nadu, IND <br />
                Phone: +91 9159669599 <br />
                Email: <a href="mailto:info@anybiz.com">info@bluedart.in</a>
                <br />
                Web: <a href="smart-eye.html">www.bluedart.in</a>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
