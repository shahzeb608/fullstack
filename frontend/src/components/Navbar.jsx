import "../styles/navbar.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div id="nav">
      <div id="exclusive">Exclusive</div>

      <nav id="nav2">
        <ul>
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/about" ? "active" : ""}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/signup" ? "active" : ""}
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      <div id="icons">
        <div id="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="What are you looking for?"
          />
        
        </div>
       <div> <CiSearch id="search-icon" /></div>
        <div id="heart" aria-label="Wishlist">
          <CiHeart />
        </div>

        <div id="scart" aria-label="Shopping Cart">
          <Link to="/cart">
            <CiShoppingCart style={{ fontSize: "2rem", cursor: "pointer" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
