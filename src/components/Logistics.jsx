import React from "react";
import truck from "../images/truck.png";
import customer from "../images/customer.png";
import board from "../images/board.png";
import "../css/logistics.css";

const Logistics = () => {
  return (
    <div className="logistics">
      <div className="logistics-body">
        <h2>Our Logistics Services</h2>
        <div className="logistics-cards">
          <div className="logistics-card">
            <img src={board} alt="" />
            <h4>Project & Exhibition</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>

          <div className="logistics-card">
            <img src={truck} alt="" />
            <h4>Local Shipping Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>

          <div className="logistics-card">
            <img src={customer} alt="" />
            <h4>Customer Clearance</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
