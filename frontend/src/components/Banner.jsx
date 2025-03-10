import React from "react";
import { FaApple } from "react-icons/fa";
import bannerImg from "../assets/img.png";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <div className="series">
          <div>
            <FaApple style={{ fontSize: "3rem" }} />
          </div>
          <div className="series-title">iPhone 14 Series</div>
        </div>
        <div className="voucher">Up to 10% off Voucher</div>
      </div>
      <div className="bigimg">
        <img src={bannerImg} alt="Promotional Banner" />
      </div>
    </div>
  );
};

export default Banner;