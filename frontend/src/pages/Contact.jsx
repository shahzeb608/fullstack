import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


const Contact = () => {
  return (
    <div>
    <Navbar/>
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info">
          <div className="contact-box">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <h3>Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: 0800 888 222</p>
          </div>
          <hr />
          <div className="contact-box">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <h3>Write To Us</h3>
            <p>Fill out our form, and we will contact you within 24 hours.</p>
            <p>Email: customer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </div>

        
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="tel" placeholder="Your Phone *" required />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Contact;
