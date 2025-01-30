import React from "react";
import "../css/services.css";
import truck from "../images/truck.png";
import customer from "../images/customer.png";
import board from "../images/board.png";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="services">
      <div className="container">
        <div className="service-header">
          <div className="head-text">
            <h1>Our Logistics Services</h1>
            <p>
              Dixtro is the world's driving coordinations supplier, we uphold
              industry and exchange the worldwide trade of merchandise through
              land transport.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="slider-container">
            <Slider {...settings}>
              <div data-aos="fade-up" class="other-card">
                <div className="inner-card">
                  <img src={board} class="other-icon" alt="..." />
                  <div class="card-body">
                    <h3>Project & Exhibition</h3>
                    <p class="card-text other-text">
                      With a worldwide organization and progressed coordination
                      arrangements, our airship cargo sending items.
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" class="other-card">
                <div className="inner-card">
                  <img src={truck} class="other-icon" alt="..." />
                  <div class="card-body">
                    <h3>Local Shipping Services</h3>
                    <p class="card-text other-text">
                      We help transport your load anyplace on the planet, making
                      your business run easily regardless of where products.
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" class="other-card">
                <div className="inner-card">
                  <img src={customer} class="other-icon" alt="..." />
                  <div class="card-body">
                    <h3>Customer Clearance</h3>
                    <p class="card-text other-text">
                      Sea cargo dispatches in excess of 5,500 holders per day to
                      ports all around the globe, making us a top forwarder.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
