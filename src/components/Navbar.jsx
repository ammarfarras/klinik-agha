import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import "./../styles/Navbar.css";
import { Container, Button, Dropdown } from "react-bootstrap";
import logoAgha from "../assets/agha fix.png";

function BasicExample() {
  const isLoggedIn = JSON.parse(localStorage.getItem("idUser")); // object berisi name, email, img, dll
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("idUser");
    window.location.reload();
  };

  let accountDropdown = "";
  if (isLoggedIn) {
    accountDropdown = (
      <div className="text-center">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Account&nbsp;</Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="text-center mx-4">
              <img height={50} src={isLoggedIn.img} alt="user" />
              <h5 className="text-center">{isLoggedIn.name}</h5>
              <p>{isLoggedIn.email}</p>
              <Button
                onClick={handleLogout}
                className="logindong text-white text-carevul border-carevul py-2"
              >
                Logout
              </Button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  } else {
    accountDropdown = (
      <div className="text-center">
        <NavLink
          to={"/login"}
          className="logindong btn text-carevul border-carevul m-1"
        >
          Login
        </NavLink>
        <NavLink
          to={"/regis"}
          className="btn color-carevul-gradient text-white m-1"
        >
          Register
        </NavLink>
      </div>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container className="mx-auto">
        <Navbar.Brand href="#">
          <div className="logoApp" onClick={() => navigate("/")}>
            <img width={120} src={logoAgha} alt="Carevul Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/consult/category"} className="nav-link">
              Konsultasi
            </NavLink>

            {isLoggedIn && isLoggedIn.email === "admin@gmail.com" && (
              <NavLink to={"/admin"} className="nav-link text-danger fw-bold">
                Admin
              </NavLink>
            )}
          </Nav>
          <Nav className="ms-auto gap-1">{accountDropdown}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
