import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div className="product-rating">
      {[...Array(5)].map((_, i) => (
        i < rating ? <FaStar key={i} className="filled-star" /> : <FaRegStar key={i} className="empty-star" />
      ))}
    </div>
  );
};

export default StarRating;