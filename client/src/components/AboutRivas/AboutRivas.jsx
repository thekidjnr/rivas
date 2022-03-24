import React from "react";
import "./Rivas.css";
import AboutPhoto from "../../photos/about/AboutPhoto.jpg";
import Vasco from "../../photos/about/Henry.png";
import Rita from "../../photos/about/Rita.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const PropertiesOverview = () => {
  return (
    <div className="about container">
      <div className="about__container">
        <div className="about__details">
          <h1>
            ABOUT <br /> RIVAS PROPERTIES
          </h1>

          <p>
            We are a Real Estate Company that strategically acquire residential
            properties and rent them out to the average Ghanaian. A continuing
            housing deficit and a shortage of real estate have led to good
            investment opportunities in Ghana. Partnering with Rivas Properties
            Ghana Limited will provide investors with good returns while
            providing value to our ordinary citizens.
          </p>
        </div>
        <div className="about__image">
          <img src={AboutPhoto} alt="About" />
        </div>
      </div>

      {/* ========TEAM========= */}
      <section className="team__container">
        <h1 className="team__container-header">OUR TEAM</h1>

        {/* ////////VASCO//////////// */}
        <div className="vasco__container">
          <div className="vasco__container-photo">
            <img src={Vasco} alt="Vasco" />
          </div>
          <div className="vasco__details-container">
            <h2>Mr. Vasco Kwame Boahen</h2>
            <h3>
              <em>(DiplAcct, BBA, MBA, Chartered Banker)</em>
            </h3>
            <h1>Chief Executive Officer</h1>
            <p>
              " Vasco is an innovative, passionate, and talented young man who
              is capable of leading this business to its goals. His passion for
              sustainable income and his belief in excellent service is the
              driving force behind Rivas Properties Ghana Limited. "
            </p>
            <div className="contacts">
              <a className="phone" href="tel:+41-792-926-208">
                <BsFillTelephoneOutboundFill />
              </a>
              <a className="mail" href="mailto:rivasproperties@gmail.com">
                <GrMail />
              </a>
            </div>
          </div>
        </div>

        {/* ////////RITA//////////// */}
        <div className="rita__container">
          <div className="vasco__details-container">
            <h2>Mrs. Rita Boahen</h2>
            <h3>
              <em>(BScN, MPH)</em>
            </h3>
            <h1>Operations Manager</h1>
            <p>
              " She brings to the table excellent communication skills and a
              deep understanding of personal relationships, helping to raise the
              brand image of Rivas Properties Ghana Limited. "
            </p>
            <div className="contacts">
              <a className="phone" href="tel:+41-792-926-208">
                <BsFillTelephoneOutboundFill />
              </a>
              <a className="mail" href="mailto:rivasproperties@gmail.com">
                <GrMail />
              </a>
            </div>
          </div>
          <div className="vasco__container-photo">
            <img src={Rita} alt="Vasco" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesOverview;
