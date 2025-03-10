import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../pages/Products/productSlice";
import { addToCart, increaseQuantity, decreaseQuantity } from "../pages/Cart/cartSlice";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/productdetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const { product, loading, error } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const { userInfo, explicitLogin } = useSelector((state) => state.auth); 

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  const getProductQuantity = (productId) => {
    const cartItem = cart.items.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = () => {
    console.log("User info:", userInfo, "explicitLogin:", explicitLogin);
    if (!userInfo || !explicitLogin) {
      navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`);
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleIncrease = () => dispatch(increaseQuantity(product.id));
  const handleDecrease = () => dispatch(decreaseQuantity(product.id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Navbar />
      <div className="fstpg">
        <div className="slide">
          {product.images &&
            product.images.map((image, index) => (
              <img
                className="productimgs"
                key={index}
                src={image}
                alt={`${product.title} image ${index + 1}`}
              />
            ))}
        </div>

        <img src={product.thumbnail} alt={product.title} className="main-image" />

        <div className="details">
          <h2 className="product-title">{product.title}</h2>
          <div className="review-stars">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </div>
          <div className="price-container">
            <div className="current-price">${product.price}</div>
            {product.originalPrice && (
              <div className="original-price">${product.originalPrice}</div>
            )}
          </div>
          <p className="product-details">{product.description}</p>
          <div className="quantity-selector">
            <button className="btn btn-secondary" onClick={handleDecrease}>-</button>
            <input className="quantity-input" type="number" value={getProductQuantity(product.id)} readOnly />
            <button className="btn btn-secondary" onClick={handleIncrease}>+</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Buy Now</button>
          </div>
          <div className="delivery-info">
            <p className="free-delivery">Free Delivery on orders over $50!</p>
          </div>
        </div>
      </div>
      <div className="footer"><Footer /></div>
    </div>
  );
};

export default ProductDetails;
