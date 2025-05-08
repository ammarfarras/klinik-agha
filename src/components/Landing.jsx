import History from "../assets/p2.svg";
import Doctor from "../assets/p5.svg";
import Online from "../assets/p1.svg";
import Amanah from "../assets/p3.svg";
import Users from "../assets/p4.svg";
import "../styles/Landing.css";
import Pict1 from "../assets/gambar 1.svg";
import Pict2 from "../assets/bro.svg";
import { Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="mt-0 hero">
        <div className="hero-container d-flex justify-content-space-between m-3 mt-0">
          <div
            className="hero-text "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1>
              Selamat Datang
              <br />
              di Klinik Pratama Agha!
            </h1>
            <p className="text-white my-4">
              Klinik Pratama dengan Pelayanan Paripurna di Kota Depok,
              Jawa Barat
            </p>
            <Link
              to={"/consult/category"}
              className="logindong btn text-carevul border-carevul text-color-carevul bg-white mt-3"
            >
              Lebih Lanjut
            </Link>
          </div>
          <div className="hero-image">
            <img src={Pict1} className="Character" alt="" />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="service">
        <div className="">
          <h1 className="a-text d-flex mt-5">Tata Nilai AGHA</h1>
          <h5 className="text-center mb-5 mx-3">
          Seluruh staf Klinik Pratama berkomitmen untuk memberikan pelayanan <br>
          </br>kesehatan masyarakat dengan 5 prinsip nilai:
          </h5>
          <div className="container-fluid mb-4">
            <Row className="gap-5 justify-content-center">
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Online} alt="" />
                    <h3 className="text-center mx-2">Profesional</h3>
                    <h6 className="text-center2 mx-3">
                    Pelayanan berkualitas tinggi dengan keterampilan dan pengetahuan tepat.
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={History} alt="" />
                    <h3 className="text-center mx-2">Empati</h3>
                    <h6 className="text-center2 mx-3">
                    Peduli terhadap kebutuhan dan dukungan emosional pasien.
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Users} alt="" />
                    <h3 className="text-center mx-2">Transparan</h3>
                    <h6 className="text-center2 mx-3">
                    Komunikasi jelas dalam menjelaskan diagnosis dan perawatan.                    
                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Amanah} alt="" />
                    <h3 className="text-center mx-2">Inovatif</h3>
                    <h6 className="text-center2 mx-3">
                    Menerapkan teknologi baru untuk pelayanan lebih efisien.                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Doctor} alt="" />
                    <h3 className="text-center mx-2">Integritas</h3>
                    <h6 className="text-center2 mx-3">
                    Menjaga kejujuran dan moralitas dalam setiap tindakan.
                    </h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>

        {/* FAQ Section */}
<section className="faq-section my-5" data-aos="fade-up" data-aos-duration="1500">
  <div className="container">
    <h2 className="text-center mb-4">Pertanyaan Umum Seputar Kesehatan</h2>
    <div className="accordion" id="faqAccordion">
      
      {/* 1 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Kapan saya harus memeriksakan diri ke dokter?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Pemeriksaan ke dokter tidak hanya diperlukan saat sakit, tetapi juga penting untuk deteksi dini penyakit yang tidak menunjukkan gejala awal. Anda disarankan untuk memeriksakan diri jika mengalami:
            <ul>
              <li>Demam lebih dari 3 hari</li>
              <li>Nyeri yang tidak membaik dengan pengobatan biasa</li>
              <li>Sesak napas, nyeri dada, atau pusing berat</li>
              <li>Perubahan drastis pada berat badan atau nafsu makan</li>
              <li>Masalah pencernaan yang berulang</li>
            </ul>
            Selain itu, lakukan check-up kesehatan rutin setidaknya setahun sekali untuk menjaga kondisi tubuh tetap optimal.
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Apa perbedaan flu dan pilek biasa?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Flu (influenza) dan pilek disebabkan oleh virus yang berbeda dan memiliki tingkat keparahan yang berbeda pula. Pilek cenderung ringan dengan gejala seperti bersin, hidung tersumbat, dan sakit tenggorokan ringan. Flu memiliki gejala lebih berat seperti:
            <ul>
              <li>Demam tinggi tiba-tiba</li>
              <li>Sakit kepala hebat</li>
              <li>Sakit tenggorokan dan batuk kering</li>
              <li>Nyeri otot dan kelelahan ekstrem</li>
            </ul>
            Flu bisa berisiko serius bagi lansia, anak-anak, atau orang dengan kondisi medis tertentu. Jika Anda merasa gejalanya berat, sebaiknya segera konsultasikan ke dokter.
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Bagaimana cara mencegah hipertensi (tekanan darah tinggi)?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Hipertensi sering disebut “silent killer” karena gejalanya sering tidak terasa, namun bisa menyebabkan komplikasi serius seperti serangan jantung atau stroke. Cara pencegahannya antara lain:
            <ul>
              <li>Mengurangi konsumsi garam dan makanan olahan</li>
              <li>Rajin berolahraga, minimal 30 menit per hari</li>
              <li>Mengelola stres dengan baik</li>
              <li>Menghindari merokok dan konsumsi alkohol</li>
              <li>Rutin memeriksa tekanan darah, terutama jika memiliki riwayat keluarga</li>
            </ul>
            Dengan gaya hidup sehat, risiko hipertensi dapat ditekan secara signifikan.
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Apa tanda-tanda awal diabetes?
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Tanda-tanda awal diabetes bisa ringan dan sering kali diabaikan. Beberapa gejala umum antara lain:
            <ul>
              <li>Sering merasa haus dan lapar</li>
              <li>Sering buang air kecil, terutama malam hari</li>
              <li>Lemas dan mudah lelah</li>
              <li>Penurunan berat badan tanpa sebab jelas</li>
              <li>Penglihatan kabur dan luka yang sulit sembuh</li>
            </ul>
            Jika Anda mengalami gejala-gejala ini, segera periksa gula darah Anda. Diagnosis dini sangat penting untuk mencegah komplikasi serius seperti kerusakan ginjal, mata, dan saraf.
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Apakah saya perlu vaksinasi rutin sebagai orang dewasa?
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Ya, vaksinasi tidak hanya untuk anak-anak. Orang dewasa juga membutuhkan vaksin untuk mencegah penyakit tertentu, terutama seiring bertambahnya usia atau jika memiliki kondisi medis. Vaksin penting untuk dewasa antara lain:
            <ul>
              <li>Vaksin Influenza (setiap tahun)</li>
              <li>Vaksin Tetanus, Diphtheria, dan Pertusis (Tdap)</li>
              <li>Vaksin Hepatitis B</li>
              <li>Vaksin HPV (untuk mencegah kanker serviks dan genital)</li>
              <li>Vaksin COVID-19 (dan booster-nya)</li>
            </ul>
            Vaksin membantu melindungi Anda dan orang di sekitar dari penularan penyakit berbahaya.
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
        

        <section
          className="introduction"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="a-container ">
            <div className="card-introduction d-flex align-center justify-center">
              <img src={Pict2} className="Character2" alt="" />
              <div className="desc">
                <h2>Visi Klinik Pratama Agha Depok</h2>
                <h5>
                  Menjadi Klinik yang memiliki kualitas pelayanan yang prima,
                  unggul, bersahabat bagi masyarakat, serta terkemuka di Wilayah 
                  Jabodetabek.
                </h5>
                <p>
                  Untuk mencapai visi tersebut, Klinik Pratama Agha Depok
                  menjalankan beberapa MISI KESEHATAN berupa Meningkatkan
                  kompetensi pegawai di berbagai bidang Melakukan pelayanan
                  dengan profesional Melengkapi Sarana dan Prasarana Klinik
                  Pratama Depok
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Landing;
