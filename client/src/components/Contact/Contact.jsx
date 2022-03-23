import React from "react";
import PhoneLogo from "../../photos/icons/big-phone.png";
import MailLogo from "../../photos/icons/big-mail.png";
import "./ContactElements.css";
import BarPng from "../../photos/Illustrations/rectangle-bar.png";
import "./ContactElements.css";
const Contact = () => {
  return (
    <div className="container contact__container">
      <div className="contact__container-phone">
        <div className="phone__container-image">
          <img src={PhoneLogo} alt="" />
        </div>
        <div className="phone__container-des">
          <h2>Phone:</h2>
          <a href="tel:+41-792-926-208">(+41) 792 926 208</a>
          <a href="tel:+233-24-373-4308">(+233) 24 373 4308</a>
          <a href="tel:+233-24-361-3568">(+233) 24 361 3568</a>
        </div>
      </div>
      <div className="contact__container-bar">
        <img src={BarPng} alt="" />
      </div>
      <div className="contact__container-phone">
        <div className="mail__container-image">
          <img src={MailLogo} alt="" />
        </div>
        <div className="mail__container-des">
          <h2>Email:</h2>
          <a href="mailto:rivasproperties@gmail.com">
            rivasproperties@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
