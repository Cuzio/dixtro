import React from "react";
import Slider from "react-slick";
import "../css/testimonials.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="testimonials container">
      <h2>Testimonials</h2>
      <div className="slider-container">
        <Slider {...settings} className="Slider">
          <div className="test-other-card">
            <div className="test-card">
              <p>
                <i>
                  “Duis at tellus at urna condimentum mattis pellentesque. Quam
                  lacus suspendisse faucibus interdum posuere. Blandit volutpa t
                  maecenas volutpat blandit aliquam etiam erat”
                </i>
              </p>
              <p>James Owusu- MD GCB Bank</p>
            </div>
          </div>

          <div className="test-other-card">
            <div className="test-card">
              <p>
                <i>
                  “Duis at tellus at urna condimentum mattis pellentesque. Quam
                  lacus suspendisse faucibus interdum posuere. Blandit volutpa t
                  maecenas volutpat blandit aliquam etiam erat”
                </i>
              </p>
              <p>James Owusu- MD GCB Bank</p>
            </div>
          </div>

          <div className="test-other-card">
            <div className="test-card">
              <p>
                <i>
                  “Duis at tellus at urna condimentum mattis pellentesque. Quam
                  lacus suspendisse faucibus interdum posuere. Blandit volutpa t
                  maecenas volutpat blandit aliquam etiam erat”
                </i>
              </p>
              <p>James Owusu- MD GCB Bank</p>
            </div>
          </div>

          <div className="test-other-card">
            <div className="test-card">
              <p>
                <i>
                  “Duis at tellus at urna condimentum mattis pellentesque. Quam
                  lacus suspendisse faucibus interdum posuere. Blandit volutpa t
                  maecenas volutpat blandit aliquam etiam erat”
                </i>
              </p>
              <p>James Owusu- MD GCB Bank</p>
            </div>
          </div>

          <div className="test-other-card">
            <div className="test-card">
              <p>
                <i>
                  “Duis at tellus at urna condimentum mattis pellentesque. Quam
                  lacus suspendisse faucibus interdum posuere. Blandit volutpa t
                  maecenas volutpat blandit aliquam etiam erat”
                </i>
              </p>
              <p>James Owusu- MD GCB Bank</p>
            </div>
          </div>

          <div className="test-other-card">
            <div className="test-card">
              <p>
                <i>
                  “Duis at tellus at urna condimentum mattis pellentesque. Quam
                  lacus suspendisse faucibus interdum posuere. Blandit volutpa t
                  maecenas volutpat blandit aliquam etiam erat”
                </i>
              </p>
              <p>James Owusu- MD GCB Bank</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
