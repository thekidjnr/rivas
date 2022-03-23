import React from "react";
import AboutPhoto from "../../photos/overview/overview-img.jpg";
import "./OverviewElements.css";

const Overview = () => {
  return (
    <section className="container overview__container">
      <div className="overview__details">
        <h1>
          RIVAS PROPERTIES <br /> OVERVIEW
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
      <div className="overview__image">
        <img src={AboutPhoto} alt="Overview Img" />
      </div>
    </section>
  );
};

export default Overview;
