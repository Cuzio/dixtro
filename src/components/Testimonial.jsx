import React from "react";
import "../css/testimonial.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className="testimonial container">
      <div className="testimonial-header">
        <div className="testimonial-head-text">
          <h1>
            People Say About Our <span>Company</span>
          </h1>
          <p>
            Dixtro is the world's driving coordinations supplier, we uphold
            industry and exchange the worldwide trade of merchandise through
            land transport.
          </p>
        </div>
        <div className="testimonial-head-btn">
          <button className="testimonial-btn">
            <a href="">ALL TESTIMONIALS</a>
          </button>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="slider-container">
          <Slider {...settings}>
            <div data-aos="fade-up" class="testimonial-other-card">
              <div className="testimonial-inner-card">
                {/* <i class="fa-solid fa-truck testimonial-other-icon"></i> */}
                <div class="testimonial-card-body">
                  <h3>"Great Work!"</h3>
                  <p class="card-text testimonial-other-text">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </p>
                </div>
                <div className="other-person">
                  {/* <img src={user1} alt="" /> */}
                  <div className="other-person-text">
                    <h5>Anna Ingrosso</h5>
                    <p>CLIENT OF COMPANY</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" class="testimonial-other-card">
              <div className="testimonial-inner-card">
                {/* <i class="fa-solid fa-truck testimonial-other-icon"></i> */}
                <div class="testimonial-card-body">
                  <h3>"Perfect Results!"</h3>
                  <p class="card-text testimonial-other-text">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </p>
                </div>
                <div className="other-person">
                  {/* <img src={user1} alt="" /> */}
                  <div className="other-person-text">
                    <h5>Tomm Skywalker</h5>
                    <p>CLIENT OF COMPANY</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" class="testimonial-other-card">
              <div className="testimonial-inner-card">
                {/* <i class="fa-solid fa-truck testimonial-other-icon"></i> */}
                <div class="testimonial-card-body">
                  <h3>"Awesome!"</h3>
                  <p class="card-text testimonial-other-text">
                    I work in project management and joined Unicoach because I
                    get great courses for less. The instructors are fantastic,
                    interesting, and helpful. I plan to use for a long time!
                  </p>
                </div>
                <div className="other-person">
                  {/* <img src={user1} alt="" /> */}
                  <div className="other-person-text">
                    <h5>Harold Perish</h5>
                    <p>CLIENT OF COMPANY</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
