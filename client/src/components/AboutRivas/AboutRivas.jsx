import React from "react";
import "./Rivas.css";
import AboutPhoto from "../../photos/overview/overview-img.jpg";

const PropertiesOverview = () => {
  return (
    <section className="container overview__container">
      <div className="about__details">
        <h1>
          ABOUT <br /> RIVAS PROPERTIES
        </h1>
        <p>
          We are a Real Estate Company that strategically acquire residential
          properties and rent them out to the average Ghanaian. A continuing
          housing deficit and a shortage of real estate have led to good
          investment opportunities in Ghana. Partnering with Rivas Properties
          Ghana Limited will provide investors with good returns while providing
          value to our ordinary citizens.
        </p>
      </div>
      <div className="about__image">
        <img src={AboutPhoto} alt="About" />
      </div>
    </section>
  );
};

export default PropertiesOverview;
