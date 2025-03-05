import React from "react";
import { IoMdHeadset } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Offcanvas } from "bootstrap";
import "../css/hero.css";
import logo from "../images/DIXTRO-LOGO.png";
import delivery1 from "../images/delivery1.png";

const Hero = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Media query to check if it's a mobile screen
    const isMobile = window.matchMedia("(max-width: 992px)").matches;

    if (isMobile) {
      // Handle Offcanvas logic for mobile
      const offcanvasElement = document.getElementById("offcanvasNavbar");
      const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);

      if (offcanvasInstance) {
        offcanvasInstance.hide();

        offcanvasElement.addEventListener(
          "hidden.bs.offcanvas",
          () => {
            // Remove the backdrop if it exists
            const backdrop = document.querySelector(".offcanvas-backdrop");
            if (backdrop) {
              backdrop.remove();
            }

            // Remove any lingering backdrop classes from body and html
            document.body.classList.remove("offcanvas-open");
            document.documentElement.classList.remove("offcanvas-open");

            // Ensure scrolling is enabled
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";

            // Scroll to the target element
            setTimeout(() => {
              // Scroll to the target element after Offcanvas is hidden
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          },
          { once: true }
        );
      }
    } else {
      // Directly scroll to the target element for desktop
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // const handleLinkClick = (e) => {
  //   e.preventDefault();

  //   const targetId = e.currentTarget.getAttribute("href");
  //   const targetElement = document.querySelector(targetId);

  //   const offcanvasElement = document.getElementById("offcanvasNavbar");
  //   const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);

  //   if (offcanvasInstance) {
  //     // Hide the Offcanvas
  //     offcanvasInstance.hide();

  //     // Add a listener for when the Offcanvas is hidden
  //     offcanvasElement.addEventListener(
  //       "hidden.bs.offcanvas",
  //       () => {
  //         // Remove the backdrop if it exists
  //         const backdrop = document.querySelector(".offcanvas-backdrop");
  //         if (backdrop) {
  //           backdrop.remove();
  //         }

  //         // Remove any lingering backdrop classes from body and html
  //         document.body.classList.remove("offcanvas-open");
  //         document.documentElement.classList.remove("offcanvas-open");

  //         // Ensure scrolling is enabled
  //         document.body.style.overflow = "auto";
  //         document.documentElement.style.overflow = "auto";

  //         // Scroll to the target element
  //         setTimeout(() => {
  //           if (targetElement) {
  //             targetElement.scrollIntoView({ behavior: "smooth" });
  //           }
  //         }, 100); // Timeout to ensure the Offcanvas is fully closed
  //       },
  //       { once: true }
  //     );
  //   }
  // };

  const handleMenuToggle = () => {
    // Remove lingering backdrops
    const backdrop = document.querySelector(".offcanvas-backdrop");
    if (backdrop) {
      backdrop.remove();
    }

    // Ensure no lingering classes on body or html
    document.body.classList.remove("offcanvas-open");
    document.documentElement.classList.remove("offcanvas-open");
  };

  const toggleOffcanvas = () => {
    handleMenuToggle(); // Clean up any lingering elements before toggling the menu

    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const offcanvasInstance = new Offcanvas(offcanvasElement);
    offcanvasInstance.show();
  };

  return (
    <div className="hero">
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
              onClick={toggleOffcanvas} // Use the toggle function to clean up and then toggle
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item petrites-link">
                  <a
                    className="nav-link petrite-link"
                    aria-current="page"
                    href="#home"
                    onClick={handleLinkClick}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item petrites-link">
                  <a
                    className="nav-link petrite-link"
                    href="#about-us"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item petrites-link">
                  <a
                    className="nav-link petrite-link"
                    href="#services"
                    onClick={handleLinkClick}
                  >
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
                </li> */}
              </ul>
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
                  <a
                    className="nav-link petrite-link"
                    href="#services"
                    onClick={handleLinkClick}
                  >
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
                {/* <button className="create">
                  <a href="https://onelink.to/petrite">
                    Create an account <FaArrowRight className="space" />
                  </a>
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* Nav ends */}

      <div className="hero-body">
        <div className="about d-flex">
          <div className="about-text">
            <h1>
              Get your goods delivered with <span>Care and Precision</span>
            </h1>
            <p>
              Dixtro is the world's driving worldwide coordinations supplier. We
              hold industry and exchannge the worldwide trade of merchandise
              through land transport.
            </p>
            <p>
              Our worth added administrations guarantee the progression of
              products proceeds consistently and supply chains stay lean and
              streamlined for progress.
            </p>

            <button class="button-30" role="button">
              <a className="nav-link tel" href="tel:07041542904">
                {/* <IoMdHeadset className="mb-1 mx-1" /> */}
                <h4>Call now</h4>
              </a>
            </button>
          </div>
          <div className="about-image">
            <img src={delivery1} alt="" className="delivery-image" />
            {/* <img
              src={deliveryMan}
              alt=""
              className="delivery-image delivery1"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
