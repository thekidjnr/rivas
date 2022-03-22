import React from "react";
import RivasLogo from "../../photos/navbar/rivas-logo.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero__background-img">
      {/* Navbar Section */}
      <div className="nav__container">
        <a href="/" className="company__img">
          <img src={RivasLogo} alt="rivas logo" />
        </a>
        <div className="nav__navlinks">
          <a href="/" className="nav__navlink">
            HOME
          </a>
          <a href="/properties" className="nav__navlink">
            PROPERTIES
          </a>
          <a href="/news" className="nav__navlink">
            NEWS & EVENTS
          </a>
          <a href="/aboutus" className="nav__navlink">
            ABOUT US
          </a>
          <a href="/contactus" className="nav__navlink">
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
