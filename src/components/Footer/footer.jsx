import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FaEnvelope, FaPhone, FaArrowRight ,FaTwitter, FaInstagram} from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  const navigate =useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>
            <FontAwesomeIcon icon={faPlane} /> Tarvel WebApp
          </h3> 
          <p>
            Discover seamless travel planning and booking with our Travel Web
            App. Explore destinations, book flights and accommodations, and
            create unforgettable experiences. Your ultimate travel companion for
            hassle-free adventures awaits. Start exploring today!
          </p>
        </div>
        <div className="footer-column">
          <h3>Provision</h3>
          <ul className="button-list">
            <li>
              <button onClick={()=>{
                navigate('/book')
              }}>
                <FaArrowRight /> Book Now
              </button>
            </li>
            <li>
              <button onClick={()=>{
                navigate('/package')
              }}>
                <FaArrowRight /> Packages
              </button>
            </li>
            <li>
              <button onClick={()=>{
                navigate('/career')
              }}>
                <FaArrowRight /> Career
              </button>
            </li>
            <li>
              <button onClick={()=>{
                navigate('/news')
              }}>
                <FaArrowRight /> News
              </button>
            </li>
            <li>
              <button onClick={()=>{
                navigate('/contact')
              }}>
                <FaArrowRight /> Send Enquiry
              </button>
            </li>
            <li>
              <button onClick={()=>{
                navigate('/login')
              }}>
                <FaArrowRight /> Sign In
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <FaEnvelope /> Email :{" "}
            <a href="mailto:info@travelapp.com">info@travelapp.com</a>
          </p>
          <p>
            <FaPhone /> Phone : <a href="tel:+1234567890">+1234567890</a>
          </p>
          <p>
            <FaTwitter /> Twitter : <a href="https://twitter.com/">@TravelVenturesHQ</a>
          </p>
          <p>
            <FaInstagram /> Instagram : <a href="https://www.instagram.com/explore/tags/TravelWanderlustHQ/">@TravelWanderlustHQ</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TravelApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
