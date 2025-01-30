import React from "react";
import call from "../images/call.png";
import "../css/call.css";

const Call = () => {
  return (
    <div className="call">
      <p>Our Customer service is available 24/7</p>
      <div className="callno">
        <img src={call} alt="" />
        <h2>07012345678</h2>
      </div>
    </div>
  );
};

export default Call;
