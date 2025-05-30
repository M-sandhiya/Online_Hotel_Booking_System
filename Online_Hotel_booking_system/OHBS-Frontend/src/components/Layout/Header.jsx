import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const onSignUp = () => {
    navigate("/SignUp");
  };

  const onHome = () => {
    navigate("/");
  };

  const onContact = () => {
    navigate("/Contact");
  };

  return (
    <header className="header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          {/* Logo and Tagline */}
<a href="/Home" className="logo-container d-flex align-items-center gap-2 text-decoration-none">
  {/* Pure CSS Logo Shape */}
  <div
    className="logo-icon d-flex justify-content-center align-items-center"
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      fontWeight: "bold",
      fontSize: "16px",
      color: "#1e1e1e",
      letterSpacing: "-1px"
    }}
  >
    IS
  </div>

  {/* Brand Text */}
  <div className="d-flex flex-column">
    <span
      className="logo-text"
      style={{
        fontWeight: 800,
        color: "#ffffff",
        letterSpacing: "1px",
        fontSize: "clamp(18px, 4vw, 30px)",
        textTransform: "uppercase",
        lineHeight: "1.2",
      }}
    >
      <span className="d-none d-sm-inline">InnoStay</span>
      <span className="d-inline d-sm-none">IS</span>
      <span style={{ color: "#ffcc00" }}>.com</span>
    </span>
    <span
      className="logo-tagline d-none d-md-block"
      style={{
        color: "#cccccc",
        fontSize: "clamp(10px, 2vw, 14px)",
        fontStyle: "italic",
        fontWeight: 300,
        marginTop: "2px",
      }}
    >
      A blend of innovation and stay
    </span>
  </div>
</a>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link">
                  <button type="button" className="btn btn-outline-dark" onClick={onHome}>
                    Home
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <button type="button" className="btn btn-outline-dark" onClick={onSignUp}>
                    LogIn/Signup
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <button type="button" className="btn btn-outline-dark" onClick={onContact}>
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
