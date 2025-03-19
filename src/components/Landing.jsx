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
