import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faShippingFast, faHeadset, faUndo } from "@fortawesome/free-solid-svg-icons";
import "../styles/about.css"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <section id="about">
        <div className="about-content">
          <div className="text-content">
            <h2 className="story">Our Story</h2>
            <p>
              Launched in 2015, Exclusive is South Asia's premier online shopping
              marketplace. With an active presence in Bangladesh, supported by a
              wide range of tailored marketing, data, and service solutions, Exclusive
              has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 million products to offer, growing at a very
              fast pace. Exclusive offers a diverse assortment in categories ranging from
              consumer electronics to fashion and home goods.
            </p>
          </div>
          <div className="image-content">
            <img src="../src/assets/mabout.png" alt="Shopping experience" onError={(e) => e.target.style.display = "none"} />
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <h3>10.5k</h3>
            <p>Sellers active on our site</p>
          </div>
          <div className="stat highlight">
            <h3>33k</h3>
            <p>Monthly Product Sales</p>
          </div>
          <div className="stat">
            <h3>45.5k</h3>
            <p>Customers active on our site</p>
          </div>
          <div className="stat">
            <h3>25k</h3>
            <p>Annual gross sales in our site</p>
          </div>
        </div>

        <div className="team">
          {[
            { img: "../src/assets/Tcruise.png", name: "Tom Cruise", role: "Founder" },
            { img: "../src/assets/image 51.png", name: "Emma Watson", role: "Managing Director" },
            { img: "../src/assets/image 47.png", name: "Will Smith", role: "Product Designer" },
          ].map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.img} alt={member.name} onError={(e) => e.target.style.display = "none"} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <ul className="social-icons">
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="guarantees">
          <div className="guarantee">
            <FontAwesomeIcon icon={faShippingFast} />
            <h3>FREE AND FAST DELIVERY</h3>
          </div>
          <div className="guarantee">
            <FontAwesomeIcon icon={faHeadset} />
            <h3>24/7 CUSTOMER SERVICE</h3>
          </div>
          <div className="guarantee">
            <FontAwesomeIcon icon={faUndo} />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>within 30 days</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
