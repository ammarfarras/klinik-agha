import logoAgha from "../assets/agha fix.png";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import fb from "../assets/icon/Facebook.svg";
import ins from "../assets/icon/Instagram.svg";
import lin from "../assets/icon/LinkedIn.svg";
import twi from "../assets/icon/Twitter.svg";
import yt from "../assets/icon/YouTube.svg";

const footer = () => {
  return (
    <>
      <div className="bg-color-footer mt-5 stroke-card-border shadow-sm">
        <div className="container ">
          <div className="row d-flex justify-content-between pt-4 pb-3">
            <div className="col-mb-5 col-md-4 mt">
              <img width={150} src={logoAgha} alt="" />
              <div className="text-gray  mb-4">
                <p>
                  Sehat tanpa ribet!
                  <span className="text-carevul fw-bolder">
                    {" "}
                    Klinik Pratama Agha
                  </span>{" "}
                  {/* <span className="text-carevul fw-bolder"> Carevul </span> */}
                  siap melayani, daftar mudah, tanpa stres—Konsultasi mudah dan cepat!
                </p>
              </div>

              <div className=" social-media d-flex justify-content-between mb-5">
                <img src={fb} alt="" />
                <img src={ins} alt="" />
                <img src={twi} alt="" />
                <img src={lin} alt="" />
                <img src={yt} alt="" />
              </div>
            </div>

            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer flex-column d-flex justify-content-around"></div>
            </div>
            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer ">
                <div className="d-flex flex-column  gap-2 ">
                  <h5 className="text-carevul">Lainnya</h5>
                  <Link to="" className="fw-normal  text-gray">
                    Syarat & Ketentuan
                  </Link>
                  <Link to="" className="fw-normal  text-gray">
                    Kebijakan Privasi
                  </Link>
                  <Link to="" className="fw-normal  text-gray">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3  mb-md-2">
              <div className="list-footer">
                <div className="fw-2 d-flex flex-column gap-2">
                  <h5 className="text-carevul ">Kontak Kami</h5>

                  <span className="fw-normal">klinikagha02@gmail.com</span>

                  <span>Jl. KH. Ahmad Dahlan No.2 Pancoran Mas, Depok 16434</span>
                  <span>0821-2404-9705</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center ">
              Copyright © 2025 Klinik Pratama Agha
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
