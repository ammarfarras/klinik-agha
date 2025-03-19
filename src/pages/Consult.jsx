import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const Consult = () => {
  const location = useLocation(); // Ambil path aktif saat ini

  return (
    <>
      <header id="header" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <NavLink
                to="/consult/category"
                className="fw-bold text-decoration-none"
              >
                <h4
                  className={`text-decoration-none ${
                    location.pathname === "/consult/category"
                      ? "text-carevul"
                      : "text-secondary"
                  }`}
                >
                  Kategori Dokter
                </h4>
              </NavLink>
              <p className="lead text-secondary">
                <small> Pilih kategori dokter untuk melakukan konsultasi</small>
              </p>
            </div>
            <div className="col-md-1">
              <h3 className="text-light-gray">|</h3>
            </div>

            <div className="col-md-7">
              <NavLink
                to="/consult/paymentdoctor/bookingstatus"
                className="fw-bold text-decoration-none"
              >
                <h4
                  className={`${
                    location.pathname === "/consult/paymentdoctor/bookingstatus"
                      ? "text-carevul"
                      : "text-light-gray"
                  }`}
                >
                  Booking Status
                </h4>
              </NavLink>
              <p className="lead text-secondary">
                <small>
                  Pilih dokter yang sesuai dengan kebutuhan kamu yuk!
                </small>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid mt-4">
        {/* Section for outlet */}
        <Outlet />
        {/* Section for outlet */}
      </div>
    </>
  );
};

export default Consult;
