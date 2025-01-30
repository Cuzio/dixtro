import React from "react";
import delivery from "../images/delivery2.png";
import box from "../images/box.png";
import sheild from "../images/Sheild.png";
import environment from "../images/Environment.png";
import "../css/work.css";

const Work = () => {
  return (
    <div className="work container">
      <h2>How We Work</h2>
      <div className="work-content">
        <img src={delivery} alt="" className="work-delivery" />
        <div className="work-content-text">
          <div className="work-text">
            <img src={box} alt="" />
            <div>
              <h4>Warehousing Services</h4>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
              </p>
            </div>
          </div>

          <div className="work-text">
            <img src={sheild} alt="" />
            <div>
              <h4>Safety & Quality</h4>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
              </p>
            </div>
          </div>

          <div className="work-text">
            <img src={environment} alt="" />
            <div>
              <h4>Safety & Quality</h4>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
