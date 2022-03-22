import React from "react";
import "./FooterElements.css";
import RivasLogo from "../../photos/navbar/rivas-logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" container footer__container">
        <div className="footer__container-1">
          <a href="/" className="rivaslogo">
            <img src={RivasLogo} alt="logo" />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            officia perferendis omnis, quas sit asperiores provident enim quasi
            in voluptates esse soluta optio quo hic aliquid corrupti nihil nobis
            quisquam!
          </p>
        </div>
        <div className="footer__container-2">
          <div className="footer__container_2-top">
            <h3>Social Media</h3>
            <div className="socials__container">
              <a href="/">
                <BsInstagram />
              </a>
              <a href="/">
                <AiFillTwitterCircle />
              </a>
              <a href="/">
                <BsFacebook />
              </a>
            </div>
          </div>

          <div className="rights__container">
            <h2>Rivas Properties Ghana Ltd.</h2>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div className="footer__container-3">
          <h3>Quick Links</h3>
          <a href="/properties">Properties</a>
          <a href="/contactus">Contact Us</a>
          <a href="/news&events">News & Events</a>
          <a href="/aboutus">About Us</a>
          <a href="/downloadbrochure">Download Brochure</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
