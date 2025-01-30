import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import "../css/prevarrow.css";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-button absolute right-0 -top-[80px]" onClick={onClick}>
      <div className="prev">
        <BsChevronLeft />
      </div>
    </div>
  );
};

export default PrevArrow;
