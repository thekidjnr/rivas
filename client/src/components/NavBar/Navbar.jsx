import React from "react";
import { FaBars } from "react-icons/fa";
import RivasLogo from "../../photos/navbar/rivas-logo.png";
import "./NavbarElements.css";

const Navbar = (toggle) => {
  return (
    <div className="nav">
      <div className="nav__container-new">
        <a href="/" className="company__img">
          <img src={RivasLogo} alt="rivas logo" />
        </a>
        <div className="mobile__icon-bar" onClick={toggle}>
          <FaBars />
        </div>
        <div className="nav__navlinks">
          <a href="/" className="nav__navlink-new">
            HOME
          </a>
          <a href="/properties" className="nav__navlink-new">
            PROPERTIES
          </a>
          <a href="/news" className="nav__navlink-new">
            NEWS & EVENTS
          </a>
          <a href="/aboutus" className="nav__navlink-new">
            ABOUT US
          </a>
          <a href="/contactus" className="nav__navlink-new">
            CONTACT US
          </a>
        </div>
        <a href="/downloadbrochure" className="btn-main" download>
          DOWNLOAD BROCHURE
        </a>
      </div>
    </div>
  );
};

export default Navbar;
