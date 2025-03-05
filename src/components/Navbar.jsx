import React from "react";
import { IoMdHeadset } from "react-icons/io";
import { Offcanvas } from "bootstrap";
import "../css/hero.css";
import logo from "../images/DIXTRO-LOGO.png";

const Navbar = () => {
  return (
    <div>
      {/* Nav starts */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" className="hero-logo" />
          </a>
          <div className="butt">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end off-seen"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="offcanvas-title" id="offcanvasNavbarLabel" href="/">
                {/* <img src={logo} alt="" className="hero-pic-logo" /> */}
              </a>
              <div className="xmark">
                <button
                  type="button"
                  className="btn-close close-xmark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="navbar-nav">
                <li className="nav-item petrites-link">
                  <a
                    className="nav-link petrite-link"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item petrites-link">
                  <a className="nav-link petrite-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item petrites-link">
                  <a className="nav-link petrite-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item petrites-link">
                  <a
                    className="nav-link petrite-link"
                    href="#contact"
                    target="_blank"
                  >
                    Contact us
                  </a>
                </li>
                <li className="nav-item mx-5 mt-1 tel-link">
                  <button className="create">
                    <a className="nav-link tel" href="tel:07023456789">
                      <IoMdHeadset className="mb-1 mx-1" />
                      07023456789
                    </a>
                  </button>
                </li>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* Nav ends */}
    </div>
  );
};

export default Navbar;
