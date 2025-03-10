import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "../pages/Cart/cartSlice";
import "../styles/cart.css"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      const currentQuantity = cartItems.find((item) => item.id === id).quantity;
      if (quantity > currentQuantity) {
        dispatch(increaseQuantity(id));
      } else if (quantity < currentQuantity) {
        dispatch(decreaseQuantity(id));
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-info">
                      <img src={item.thumbnail} alt={item.title} className="product-image" />
                      <span className="product-t">{item.title}</span>
                    </div>
                  </td>
                  <td className="product-p">${item.price}</td>
                  <td className="product-quantity">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      min="1"
                    />
                  </td>
                  <td className="product-subtotal">${calculateSubtotal(item.price, item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

{cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary">Cart Total</div>
            <div className="summary-details">
              <div className="subtotal">Subtotal: ${calculateTotal()}</div>
              <div className="shipping">Shipping: Free</div>
              <div className="total">Total: ${calculateTotal()}</div>
            </div>
            <button className="button proceed-button">Proceed to checkout</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
