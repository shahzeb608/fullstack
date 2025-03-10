import React from "react";

const ProductCartControls = ({ productId, quantity, onAdd, onIncrease, onDecrease }) => {
  return (
    <div className="cart-controls">
      {quantity > 0 ? (
        <div className="quantity-controls">
          <button className="quantity-button" onClick={() => onDecrease(productId)}>
            -
          </button>
          <span>{quantity}</span>
          <button className="quantity-button" onClick={() => onIncrease(productId)}>
            +
          </button>
        </div>
      ) : (
        <button className="add-to-cart-button" onClick={onAdd}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCartControls;