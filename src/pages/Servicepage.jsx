import React from "react";
import Navbar from "../components/Navbar";
import welcome from "../images/welcome.png";
import mission from "../images/mission.png";
import { FaRegStar } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { GoGoal } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import "../css/homepage.css";
import logo1 from "../images/Logoipsum1.png";
import logo2 from "../images/Logoipsum2.png";
import logo3 from "../images/Logoipsum3.png";
import logo4 from "../images/Logoipsum4.png";
import logo5 from "../images/Logoipsum5.png";
import logo6 from "../images/Logoipsum6.png";
import Testimonials from "../components/Testimonials";
import Call from "../components/Call";
import Footer from "../components/Footer";

const Servicepage = () => {
  return (
    <div className="service">
      <Navbar />
      <div className="service-hero">
        <h1>Services</h1>
      </div>

      <div className="service-welcome">
        <div className="service-welcome-text">
          <h3>Proud to deliver excellent services all the time</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea consequat.
          </p>
        </div>
        <img src={welcome} alt="" />
      </div>

      <div className="vision">
        <h2>Our Logistics Services</h2>
        <div className="vision-test">
          <div className="vision-context">
            <FaRegStar className="visionTarget" />
            <div className="mission-text">
              <h3>Sea Transport Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="vision-context">
            <GoTrophy className="visionTarget" />
            <div className="mission-text">
              <h3>Warehousing Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="vision-context">
            <GoTrophy className="visionTarget" />
            <div className="mission-text">
              <h3>Air Fright Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="vision-context">
            <FaRegStar className="visionTarget" />
            <div className="mission-text">
              <h3>Project & Exhibition</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="vision-context">
            <GoTrophy className="visionTarget" />
            <div className="mission-text">
              <h3>Local Shipping Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="vision-context">
            <GoTrophy className="visionTarget" />
            <div className="mission-text">
              <h3>Customer Clearance</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>

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

      <Testimonials />
      <Call />
      <Footer />
    </div>
  );
};

export default Servicepage;
