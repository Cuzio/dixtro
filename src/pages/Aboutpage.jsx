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

const Aboutpage = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-hero">
        <h1>About us</h1>
      </div>

      <div className="about-welcome">
        <div className="about-welcome-text">
          <h3>Welcome to Dixtro</h3>
          <p>
            Dixtro is a world classs logistics company that provides tilord
            logistics solutions, ensuring timely and secure delivery of your
            valuable goods
          </p>
        </div>
        <img src={welcome} alt="" />
      </div>

      <div className="vision">
        <img src={mission} alt="" />
        <div className="vision-test">
          <div className="vision-context">
            <FaRegStar className="visionTarget" />
            <div className="mission-text">
              <h3>Our Vision</h3>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
              </p>
            </div>
          </div>

          <div className="vision-context">
            <GoTrophy className="visionTarget" />
            <div className="mission-text">
              <h3>Our Mission</h3>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
              </p>
            </div>
          </div>

          <div className="vision-context">
            <GoGoal className="visionTarget" />
            <div className="mission-text">
              <h3>Our Goals</h3>
              <p>
                <GoDotFill />
                Leo duis ut diam quam nulla porttitor massa id
              </p>
              <p>
                <GoDotFill />
                Leo a diam sollicitudin tempor id eu nisl
              </p>
              <p>
                <GoDotFill />
                Id consectetur purus ut faucibus pulvinar
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

export default Aboutpage;
