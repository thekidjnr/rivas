import React from "react";
import "./NavSideElements.css";
import { FaTimes } from "react-icons/fa";
import { NavSideContainer, NavsideBody, CloseIcon } from "./NavSideStyle";

const NavSide = ({ toggle, isOpen }) => {
  return (
    <NavSideContainer isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle}>
        <FaTimes />
      </CloseIcon>
      <NavsideBody isOpen={isOpen}>
        <div className="navside__navlinks">
          <a href="/" className="navside__navlink-new" onClick={toggle}>
            HOME
          </a>
          <a
            href="/properties"
            className="navside__navlink-new"
            onClick={toggle}
          >
            PROPERTIES
          </a>
          <a href="/news" className="navside__navlink-new" onClick={toggle}>
            NEWS & EVENTS
          </a>
          <a href="/aboutus" className="navside__navlink-new" onClick={toggle}>
            ABOUT US
          </a>
          <a
            href="/contactus"
            className="navside__navlink-new"
            onClick={toggle}
          >
            CONTACT US
          </a>
        </div>
        <a href="/downloadbrochure" className="btn-main-small" download>
          DOWNLOAD BROCHURE
        </a>
      </NavsideBody>
    </NavSideContainer>
  );
};

export default NavSide;
