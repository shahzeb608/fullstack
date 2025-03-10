import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import ProductCartControls from "./ProductCartControls";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import "../styles/productcard.css"

const ProductCard = ({ product, quantity, onAddToCart, onIncrease, onDecrease }) => {
  console.log(product)
  return (
    <div className="product-card">
      <div className="disc">25%</div>
      <div className="product-bgc">
        <Link to={`./product/${product._id}`}>
          <img src={product.thumbnail} alt={product.title} />
        </Link>
      </div>
      <div className="product-actions">
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faEye} />
      </div>
      <div className="product-info">
        <div className="product-name">{product.title}</div>
        <div className="product-price">${product.price}</div>
        <StarRating rating={product.rating} />
      </div>
      <ProductCartControls
        productId={product.id}
        quantity={quantity}
        onAdd={() => onAddToCart(product)}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default ProductCard;
