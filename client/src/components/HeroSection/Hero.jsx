import React from "react";
import RivasLogo from "../../photos/navbar/rivas-logo.png";
import "./HeroSection.css";
import { FaBars } from "react-icons/fa";
const HeroSection = (toggle, isOpen) => {
  return (
    <div className="hero__background-img">
      {/* Navbar Section */}
      <div className="nav__container">
        <a href="/" className="company__img">
          <img src={RivasLogo} alt="rivas logo" />
        </a>
        <div className="mobile__icon-bar" isOpen={isOpen} onClick={toggle}>
          <FaBars />
        </div>
        <div className="nav__navlinks">
          <a href="/" className="nav__navlink-main">
            HOME
          </a>
          <a href="/properties" className="nav__navlink-main">
            PROPERTIES
          </a>
          <a href="/news" className="nav__navlink-main">
            NEWS & EVENTS
          </a>
          <a href="/aboutus" className="nav__navlink-main">
            ABOUT US
          </a>
          <a href="/contactus" className="nav__navlink-main">
            CONTACT US
          </a>
        </div>
        <a href="/downloadbrochure" className="btn-main" download>
          DOWNLOAD BROCHURE
        </a>
      </div>

      {/* Body Text */}
      <div className="hero__text">
        <div className="hero__header">
          THE BEST PLACE FOR YOUR PROPERTY IS HERE. YOU:
        </div>
        <ul>
          <li>Locate</li>
          <li>Acquire</li>
          <li>Renovate</li>
          <li>Invest</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
