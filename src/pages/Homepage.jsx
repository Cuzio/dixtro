import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";
import Servivces from "../components/Services";
import Testimonial from "../components/Testimonial";
import Logistics from "../components/Logistics";
import "../css/homepage.css";
import logo1 from "../images/Logoipsum1.png";
import logo2 from "../images/Logoipsum2.png";
import logo3 from "../images/Logoipsum3.png";
import logo4 from "../images/Logoipsum4.png";
import logo5 from "../images/Logoipsum5.png";
import logo6 from "../images/Logoipsum6.png";
import Work from "../components/Work";
import Call from "../components/Call";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Homepage = () => {
  const location = useLocation();
  const lastHash = useRef("");
  useEffect(() => {
    const urlHash = window.location.hash;
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }
    if (urlHash.length) {
      // const element = document.getElementById(urlHash.substring(1));
      const element = document.getElementById(urlHash.slice(1));

      // if (element) {
      //   element.scrollIntoView(true);
      // }
      if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
          document
            .getElementById(lastHash.current)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
          lastHash.current = "";
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className="mt-0">
      <Hero />
      {/* <Logistics /> */}
      <Servivces />
      <div className="marque-text">
        <h2>Our Clients</h2>
        <marquee behavior="" direction="">
          <div className="d-flex marque">
            <img src={logo1} alt="" className="logoi" />
            <img src={logo2} alt="" className="logoi" />
            <img src={logo3} alt="" className="logoi" />
            <img src={logo4} alt="" className="logoi" />
            <img src={logo5} alt="" className="logoi" />
            <img src={logo6} alt="" className="logoi" />
          </div>
        </marquee>
      </div>
      <Work />
      <Call />
      <Testimonials />
      {/* <Testimonial /> */}
      <FAQ />
    </div>
  );
};

export default Homepage;
