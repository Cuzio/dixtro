import React from "react";
import { BsChevronRight } from "react-icons/bs";
import "../css/nextarrow.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-button absolute right-0 -top-[80px]" onClick={onClick}>
      <div className="next">
        <BsChevronRight />
      </div>
    </div>
  );
};

export default NextArrow;
