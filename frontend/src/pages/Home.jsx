import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../pages/Products/productSlice";
import { addToCart, increaseQuantity, decreaseQuantity } from "../pages/Cart/cartSlice";
import Layout from "../layouts/Layout";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";
import CategorySlider from "../components/CategorySlider";
import frame from "../assets/frame.png";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const [firstSliderTranslateX, setFirstSliderTranslateX] = useState(0);
  const [secondSliderTranslateX, setSecondSliderTranslateX] = useState(0);

  const firstSliderContainerRef = useRef(null);
  const firstSliderWrapperRef = useRef(null);
  
  const secondSliderContainerRef = useRef(null);
  const secondSliderWrapperRef = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getProductQuantity = (productId) => {
    const cartItem = cart.items.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (product) => dispatch(addToCart(product));
  const handleIncrease = (productId) => dispatch(increaseQuantity(productId));
  const handleDecrease = (productId) => dispatch(decreaseQuantity(productId));

  const handleSlide = (direction, containerRef, wrapperRef, setTranslateX, translateX) => {
    const containerWidth = containerRef.current.offsetWidth;
    const maxTranslate = containerWidth - wrapperRef.current.scrollWidth;
    let newTranslate = translateX;

    if (direction === "left") {
      newTranslate = Math.min(translateX + containerWidth * 0.8, 0);
    } else {
      newTranslate = Math.max(translateX - containerWidth * 0.8, maxTranslate);
    }

    setTranslateX(newTranslate);
  };

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (error) return <Layout><div>Error: {error}</div></Layout>;

  return (
    <Layout>
      <div className="container">
        <Banner />

        <div className="trend">
          <div id="time">
            <h1>Flash Sale</h1>
            <h1>{currentTime.toLocaleTimeString()}</h1>
          </div>
        </div>

        <div className="slider-container" ref={firstSliderContainerRef}>
          <button className="slide-button left" 
            onClick={() => handleSlide("left", firstSliderContainerRef, firstSliderWrapperRef, setFirstSliderTranslateX, firstSliderTranslateX)}>
            &lt;
          </button>
          <button className="slide-button right" 
            onClick={() => handleSlide("right", firstSliderContainerRef, firstSliderWrapperRef, setFirstSliderTranslateX, firstSliderTranslateX)}>
            &gt;
          </button>

          <div className="products-container">
            <div
              className="products-wrapper"
              ref={firstSliderWrapperRef}
              style={{
                transform: `translateX(${firstSliderTranslateX}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={getProductQuantity(product.id)}
                  onAddToCart={handleAddToCart}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              ))}
            </div>
          </div>
        </div>
        
        <CategorySlider />
        <img id="frame" src={frame} alt="" />
      </div>
    </Layout>
  );
};

export default Home;
